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
   
    town: "Swedru",
  
    pollingStation: {
      pollingStationName: "Min of Agric Swd - B130101",
      ndcVotes: 80,
      nppVotes: 10,
      cppVotes:9,
      totalVoteCast:0,
      rejectedBallot: 0,
      turnedOut:0,
    }
  },
  {

    town: "Swedru",

    pollingStation: {
      pollingStationName: "Royal Gate Fire Chapel Swd - B130102",
      ndcVotes: 210,
      nppVotes: 110,
      cppVotes:110,
      totalVoteCast:0,
      rejectedBallot: 10,
      turnedOut:0,
    }
  },
  {
   
    town: "Nyakrom",

    pollingStation: {
      pollingStationName: "Meth JHS Swd - B130103",
      ndcVotes: 500,
      nppVotes: 570,
      cppVotes:0,
      totalVoteCast:0,
      rejectedBallot: 10,
      turnedOut:0,
    }
  },
  {
  
    town: "Nyakrom",
  
    pollingStation: {
      pollingStationName: "Meth Prim Sch Swd - B130104",
      ndcVotes: 100,
      nppVotes: 90,
      cppVotes:110,
      totalVoteCast:0,
      rejectedBallot: 10,
      turnedOut:0,
    }
  },
   {
    
    town: "Abodom",
   
    pollingStation: {
      pollingStationName: "Fire Service Station Swd - B130105",
      ndcVotes:320,
      nppVotes: 190,
      cppVotes:40,
      totalVoteCast:0,
      rejectedBallot: 5,
      turnedOut:0,
    }
  },
  {
    town: "Kukurantumi",
 
    pollingStation: {
      pollingStationName: "Town Hall Swd - B130201",
      ndcVotes: 210,
      nppVotes: 100,
      cppVotes:10,
      totalVoteCast:0,
      rejectedBallot: 2,
      turnedOut:0,
    }
  },
  {
   
    town: "Nkum",
   
    pollingStation: {
      pollingStationName: "High Court Swd - B130202",
      ndcVotes: 20,
      nppVotes: 10,
      cppVotes:20,
      totalVoteCast:0,
      rejectedBallot: 0,
      turnedOut:0,
    }
  },
  {
   
    town: "Nkum",

    pollingStation: {
      pollingStationName: "Anglican Church Swd - B130203",
      ndcVotes: 10,
      nppVotes: 5,
      cppVotes:2,
      totalVoteCast:0,
      rejectedBallot: 9,
      turnedOut:0,
    }
  },
  {
   
    town: "Nkum",

    pollingStation: {
      pollingStationName: "OLD GES Office, Swd - B130204",
      ndcVotes: 30,
      nppVotes: 20,
      cppVotes: 5,
      totalVoteCast: 0,
      rejectedBallot: 1,
      turnedOut: 0,
    }
  },
  {
   
    town: "Swedru",

    pollingStation: {
      pollingStationName: "Solid Foundation Prep Sch Swd - B130205",
      ndcVotes: 45,
      nppVotes: 35,
      cppVotes: 10,
      totalVoteCast: 0,
      rejectedBallot: 2,
      turnedOut: 0,
    }
    
  },
   {
   
    town: "Swedru",
 
    pollingStation: {
      pollingStationName: "Police MTTU Office Swd 1 - B130206",
      ndcVotes: 50,
      nppVotes: 40,
      cppVotes: 15,
      totalVoteCast: 0,
      rejectedBallot: 3,
      turnedOut: 0,
    }
  },
  {
  
    town: "Abodom",
 
    pollingStation: {
      pollingStationName: "Police MTTU Office Swd 2 - B130207",
      ndcVotes: 50,
      nppVotes: 40,
      cppVotes: 15,
       totalVoteCast: 0,
      rejectedBallot: 0,
     
     
      turnedOut: 0,
    }
  },
];


export const townNames = [
  {
    town: "Swedru"
  },
  {
    town:"Abodom"
  },{
    town:"Nyakrom"
  },
  {
    town:"Kukurantumi"
  },
  {
    town: "Nkum"
  }
]

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







