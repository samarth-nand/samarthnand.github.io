import commands from '../../config.json' assert {type: 'json'};

const createResume = () : string[] => {
    let string = "";
    const resume : string[] = [];
    const files = `${commands.resume.length} File(s)`;
    const SPACE = "&nbsp;";
    
    resume.push("<br>");
    
    commands.resume.forEach((ele) => {
        let link = `<a href="${ele[3]}" target="_blank">${ele[0]}</a>`; // Using the 4th item for link
        string += SPACE.repeat(2);
        string += link; // Adding the company/project link
        
        string += SPACE.repeat(17 - ele[0].length); // Adjust spacing based on the company name length
        string += ele[1]; // Position and duration
        
        string += SPACE.repeat(5); // Adding space before location
        string += ele[2]; // Location
        
        resume.push(string);
        string = ''; // Reset string for the next entry
    });
    
    resume.push("<br>");
    resume.push(files);
    resume.push("<br>");
    
    return resume;
}

export const RESUME = createResume();