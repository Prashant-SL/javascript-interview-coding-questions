const projects = [
    {
        id: 1,
        name: 'Project A',
        timeEntries: [
            { date: '2023-01-01', hours: 8 },
            { date: '2023-01-02', hours: 6 },
        ],
    },
    {
        id: 2,
        name: 'Project B',
        timeEntries: [
            { date: '2023-01-01', hours: 4 },
            { date: '2023-01-02', hours: 8 },
            { date: '2023-01-03', hours: 5 },
        ],
    }
];

//   This code snippet defines an array named projects, which contains objects representing different projects.
//   Each project object has an id, a name, and an array of timeEntries. The timeEntries array contains objects with information about the time spent on the project, including a date and the number of hours worked on that date.
//   Write a function named getTopProjectsByHours that takes the projects array as input, calculates the total hours for each project, and returns the top 5 projects sorted by total hours in descending order.

//   Solution

function getTopProjectsByHours(projects) {
    const allProjects = projects.map((project) => {
        const timeTakenByProject = project.timeEntries.reduce((sum, timeEntry) => sum + timeEntry.hours, 0);
        return { ...project, timeTakenByProject };
    });
    const timeTakenOrder = allProjects.sort((a, b) =>
        b.timeTakenByProject - a.timeTakenByProject
    );

    return timeTakenOrder;

}

getTopProjectsByHours(projects)
// const allProjs = projects.map((project) => {
//     const projTime = project.timeEntries.reduce((ac, cv) => ac + cv.hours, 0);
//     return { ...project, projTime };
// }).sort((a, b) => b.projTime - a.projTime).slice(0, 5);

// return allProjs;