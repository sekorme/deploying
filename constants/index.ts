import { UserPlus } from "lucide-react";

export const sidebarLinks = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        icon: "/bar-chart-3.svg"
    },
      {
        name:'Collation',
        path:'/dashboard/collation',
        icon:'/archive.svg'
    },
  
  
    {
        name: 'Candidates',
        path: '/dashboard/candidates',
        icon: '/users.svg'
    },
    {
        name: 'Results',
        path: '/dashboard/results',
        icon: '/notebook-pen.svg'
    },
    {
        name: 'Users',
        path: '/dashboard/users',
        icon: '/user-plus.svg'
    },
    {
        name: 'Settings',
        path: '/dashboard/settings',
        icon: '/cog.svg'
    },
    
   
]



export const dataCollate = [
  {
    id: "1",
    amount: 900,
    status: "failed",
    email: "carmella@hotmail.com",
    pollingStation: {
      pollingStationName: "Otinkorang",
      ndcVotes: 80,
      nppVotes: 10,
      cppVotes:9,
      totalVoteCast:0,
      rejectedBallot: 0,
      turnedOut:0,
    }
  },
  {
    id: "2",
    amount: 900,
    status: "failed",
    email: "carmella@hotmail.com",
    pollingStation: {
      pollingStationName: "Nyakrom",
      ndcVotes: 210,
      nppVotes: 110,
      cppVotes:110,
      totalVoteCast:0,
      rejectedBallot: 10,
      turnedOut:0,
    }
  },
  {
    id: "3",
    amount: 900,
    status: "failed",
    email: "carmella@hotmail.com",
    pollingStation: {
      pollingStationName: "Odumase",
      ndcVotes: 500,
      nppVotes: 570,
      cppVotes:0,
      totalVoteCast:0,
      rejectedBallot: 10,
      turnedOut:0,
    }
  },
  {
    id: "4",
    amount: 900,
    status: "failed",
    email: "carmella@hotmail.com",
    pollingStation: {
      pollingStationName: "Swedru",
      ndcVotes: 100,
      nppVotes: 90,
      cppVotes:110,
      totalVoteCast:0,
      rejectedBallot: 10,
      turnedOut:0,
    }
  },
   {
    id: "5",
    amount: 1200,
    status: "success",
    email: "julian@example.com",
    pollingStation: {
      pollingStationName: "Kumasi",
      ndcVotes:320,
      nppVotes: 190,
      cppVotes:40,
      totalVoteCast:0,
      rejectedBallot: 5,
      turnedOut:0,
    }
  },
  {
    id: "6",
    amount: 800,
    status: "pending",
    email: "sophia@example.net",
    pollingStation: {
      pollingStationName: "Tamale",
      ndcVotes: 210,
      nppVotes: 100,
      cppVotes:10,
      totalVoteCast:0,
      rejectedBallot: 2,
      turnedOut:0,
    }
  },
  {
    id: "7",
    amount: 950,
    status: "failed",
    email: "michael@example.org",
    pollingStation: {
      pollingStationName: "Accra",
      ndcVotes: 20,
      nppVotes: 10,
      cppVotes:20,
      totalVoteCast:0,
      rejectedBallot: 0,
      turnedOut:0,
    }
  },
  {
    id: "8",
    amount: 1100,
    status: "success",
    email: "lucas@example.com",
    pollingStation: {
      pollingStationName: "Sekondi",
      ndcVotes: 10,
      nppVotes: 5,
      cppVotes:2,
      totalVoteCast:0,
      rejectedBallot: 9,
      turnedOut:0,
    }
  },
  {
    id: "9",
    amount: 1050,
    status: "pending",
    email: "example9@example.com",
    pollingStation: {
      pollingStationName: "Aflao",
      ndcVotes: 30,
      nppVotes: 20,
      cppVotes: 5,
      totalVoteCast: 0,
      rejectedBallot: 1,
      turnedOut: 0,
    }
  },
  {
    id: "10",
    amount: 980,
    status: "failed",
    email: "example10@example.com",
    pollingStation: {
      pollingStationName: "Ho",
      ndcVotes: 45,
      nppVotes: 35,
      cppVotes: 10,
      totalVoteCast: 0,
      rejectedBallot: 2,
      turnedOut: 0,
    }
    
  },
   {
    id: "11",
    amount: 1200,
    status: "success",
    email: "example20@example.com",
    pollingStation: {
      pollingStationName: "Bolgatanga",
      ndcVotes: 50,
      nppVotes: 40,
      cppVotes: 15,
      totalVoteCast: 0,
      rejectedBallot: 3,
      turnedOut: 0,
    }
  },
  {
    id: "12",
    amount: 1200,
    status: "success",
    email: "example20@example.com",
    pollingStation: {
      pollingStationName: "Tema",
      ndcVotes: 50,
      nppVotes: 40,
      cppVotes: 15,
       totalVoteCast: 0,
      rejectedBallot: 0,
     
     
      turnedOut: 0,
    }
  },
];


export const tableHeader = [
    {
        pollStation: 'Polling Station',
        ndc: 'NDC',
        npp: 'NPP',
        cpp:"Cpp",
       
        total: 'Total votes',
         rejected: 'Rejected ballot',
        turnedOut: 'Turned out',
        action: 'Action'
    }
]



  export const totalNdcVotes = dataCollate.reduce((acc, curr) => acc + curr.pollingStation.ndcVotes, 0);
  export const totalNppVotes = dataCollate.reduce((acc, curr) => acc + curr.pollingStation.nppVotes, 0);
  export const totalCppVotes = dataCollate.reduce((acc,curr) => acc + curr.pollingStation.cppVotes, 0);
  export const totalVotes = totalNdcVotes + totalNppVotes + totalCppVotes;
  export const ndcPercentage = ((totalNdcVotes / totalVotes) * 100).toFixed(2);
  export const NppPercentage = ((totalNppVotes / totalVotes) * 100).toFixed(2);




 export const countRejectedBallots = dataCollate.filter(item => item.pollingStation.rejectedBallot > 0).length;



export const allRejected = dataCollate.map(item => item.pollingStation.rejectedBallot).length;







