# rand-github-io

Testing out [!ReType](https://retype.com)

```rs # isotp.rs

/// A structure representing an ISO-TP message with a fixed maximum size `N`.
/// 
/// # Examples
///
/// ```
/// match self.my_isotp.from_can_data(can_frame.data()) {
///    Ok(IsoTpState::Continue) => {
///        // Continue the process and request additional bytes.
///        Ok(request_additional_bytes())
///    }
///    Ok(IsoTpState::End) => {
///        // Try to parse diagnostic values. Log an error if it fails.
///        if let Err(e) = self.parse_diag_values() {
///            error!("Error parsing diagnostic values: {}", e);
///        }
///        // Proceed to the next diagnostic mode regardless of the result.
///        Ok(self.diag_mode_next())
///    }
///    Err(e) => {
///        // Log any errors encountered during the ISO-TP parsing.
///        error!("Error in diagnostic process: {}", e);
///        // Proceed to the next diagnostic mode in case of an error.
///        Ok(self.diag_mode_next())
///    }
/// }
/// ```

use crate::IsoTpErrorType;
use heapless::Vec;

/// Represents the state of an ISO-TP message transmission.
pub enum IsoTpState {
    Continue,
    End,
}
#[derive(Debug, Clone)]
pub struct IsoTp<const N: usize>(pub Vec<u8, N>);

impl<const N: usize> IsoTp<N> {
    pub fn from_can_data(&mut self, data: &[u8]) -> Result<IsoTpState, IsoTpErrorType> {
        const CAN_FRAME_LEN: usize = 8;
        const CONTROL_BYTE: u8 = 0x10;
        const SKIP_LEN: usize = 4;

        if data.len() != CAN_FRAME_LEN {
            return Err(IsoTpErrorType::Frame);
        }

        // Determine the slice of data to be added.
        let slice = match data[0] {
            CONTROL_BYTE => {
                self.0.clear();
                &data[SKIP_LEN..]
            }
            _ => &data[1..],
        };

        if self.0.capacity() < self.0.len() + slice.len() {
            return Err(IsoTpErrorType::Len(self.0.len()));
        }
        self.0.extend_from_slice(slice).map_err(|_| IsoTpErrorType::BadSlice)?;
        Ok(if self.0.is_full() { IsoTpState::End } else { IsoTpState::Continue })
    }
}

```
