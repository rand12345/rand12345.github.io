# rand-github-io

Testing out [!ReType](https://retype.com)

```rs # isotp.rs
use crate::IsoTpErrorType;
use heapless::Vec;

pub enum IsoTpState {
    Continue,
    End,
}

#[derive(Debug, Clone)]
pub struct IsoTp<const N: usize>(pub Vec<u8, N>);
impl<const N: usize> IsoTp<N> {
    pub fn from_can_data(&mut self, data: &[u8]) -> Result<IsoTpState, IsoTpErrorType> {
        if data.len() != 8 {
            return Err(IsoTpErrorType::Frame);
        }
        /* ... */
    }
}

```
