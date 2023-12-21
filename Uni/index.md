# University Projects

## Final Thesis

||| **AntiVirus evasion for Rust based malware - Jan 2024**

### Aim

Develop evasion improvements for Rust-based malware

### Objectives

1. **Compare and Select Malware Attributes**:
   - Evaluate a range of malware attributes to determine their viability and effectiveness

2. **Develop Malware Binaries**:
   - Design and develop four functionally distinct malware binaries in Rust and C++

3. **Automated Build Script Implementation**:
   - Create and test an automated build script capable of generating unique malware binaries with various compiler options.

4. **Data Analysis from VirusTotal (VT)**:
   - Collect and analyze sample data from VT to refine the malware attributes and binaries.

5. **Agile Development and Experimentation**:
   - Employ Agile methodology to iterate the development process, experimenting with source code modifications to enhance evasion techniques.

6. **Findings Comparison**:
   - Compare and contrast the findings from each iteration to identify the most effective evasion strategies

### Methodology

- Implement a rigorous testing framework to assess the effectiveness of various evasion techniques
- Automate data collection through VT submissions and analyze it using statistical software to guide further development

### Expected Outcomes

- Rust to generate more evasive malware than C++

### Timeline

- The project commences in January 2024 and concludes with the submission of the thesis in April 2024.
|||

## Security and Forensic Tools

### OpenStego-dict

[!ref icon=":rocket:" text="Repo"](https://github.com/rand12345/openstego-dict)

Modification of Syvaidya's [OpenStego steganography](https://github.com/syvaidya/openstego) tool.

Added command line feature to perform dictionary attacks on steganography images as part of a CompSci forensics module

```java OpenStegoCmd.java
if (stego.getConfig().getPassword() != null) {
    // Check if cmd line password entry is a (dictionary) file by testing string as
    // file. Loops until correct password is found or dictionary is exhausted.

    try (BufferedReader br = new BufferedReader(new FileReader(stego.getConfig().getPassword()))) {
        System.err.println("Dictionary attack using file: " + stego.getConfig().getPassword());
        String line;
        // Loop over text file a check if valid password
        while ((line = br.readLine()) != null) {
            stego.getConfig().setPassword(line);
            try {
                msgData = stego.extractData(new File(stegoFileName));
                // Correct password guess, break from while loop and process
                System.err.println("Found password: " + line);
                break;
            } catch (OpenStegoException osEx) {
                if (osEx.getErrorCode() == OpenStegoErrors.INVALID_PASSWORD
                        || osEx.getErrorCode() == OpenStegoErrors.NO_VALID_PLUGIN) {

                    System.err.println("Password incorrect: " + line);
                    continue;
                }
            }
        }
    } catch (IOException e) {
        System.err.println("Attempting to extract using password: " + stego.getConfig().getPassword());
    }
}

```
