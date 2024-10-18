import command from '../../config.json' assert {type: 'json'};

const createWork = () : string[] => {
    let string = "";
    const work : string[] = [];
    const files = `${command.work.length} File(s)`;
    const SPACE = "&nbsp;";
    
    work.push("<br>");
    
    command.work.forEach((ele) => {
        let link = `<a href="${ele[3]}" target="_blank">${ele[0]}</a>`; // Using the 4th item for link
        string += SPACE.repeat(2);
        string += link; // Adding the company/project link
        
        string += SPACE.repeat(17 - ele[0].length); // Adjust spacing based on the company name length
        string += ele[1]; // Position and duration
        
        string += SPACE.repeat(5); // Adding space before location
        string += ele[2]; // Location
        
        work.push(string);
        string = ''; // Reset string for the next entry
    });
    
    work.push("<br>");
    work.push(files);
    work.push("<br>");
    
    return work;
}

export const WORK = createWork();
