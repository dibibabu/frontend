import {UilEstate,UilClipboardAlt,UilUsersAlt,UilPackage,UilChart} from '@iconscout/react-unicons'


export const SidebarData = [
    {
        icon:UilEstate,
        heading:"Dashboard"
    },
    {
        icon:UilClipboardAlt,
        heading:"Orders"
    },
    {
        icon:UilUsersAlt,
        heading:"Users"
    },
    {
        icon:UilPackage,
        heading:"Products"
    },
    {
        icon:UilChart,
        heading:"Analytics"
    }
]

export const CardsData = [
{
    tittle:"Users",
    color:{
        backGround:"linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
        boxShadow:" rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        
    },
    barValue:80,
    value:"2345",
    png:UilUsersAlt,
    series:[
        {
            name:"users",
            data:[31,40,49,27,42,67,99]
        }
    ]
},

{
    tittle:"Posts",
    color:{
        backGround:" linear-gradient(to right top, #051937, #342d5c, #6c3d7b, #aa4a90, #e95998)",
        boxShadow:" rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        
    },
    barValue:55,
    value:"2345",
    png:UilUsersAlt,
    series:[
        {
            name:"users",
            data:[31,40,49,27,42,67,99]
        }
    ]
},
{
    tittle:"ReportedUser",
    color:{
        backGround:" linear-gradient(to right top, #e3f6dd, #c6d5b1, #aeb485, #9a935b, #877234)",
        boxShadow:" rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        
    },
    barValue:90,
    value:"2345",
    png:UilUsersAlt,
    series:[
        {
            name:"users",
            data:[31,40,49,27,42,67,99]
        }
    ]
}
]