import './App.css';
import { Member } from './member';
import AboutUs from './AboutUs';
import { SubmitBtn } from './SubmitBtn';
function App() {

  const people=[
    {
        id: 1,
        name:"Irfan",
        city:"Thanjavur"
    },
    {
        id: 2,
        name:"Asif",
        city:"Nandavaram"
    },  
    {
        id: 3,
        name:"Safi",
        city:"Atmakur"
    },
    {
        id: 4,
        name:"Ruby",
        city:"Nellore"
    },  
    {
        id: 5,
        name:"ALI",
        city:"Nandavaram"
    },
    {
        id: 6,
        name:"Ahmed",
        city:"Chennai"
    },
    {
        id: 7,
        name:"Priya",
        city:"Bangalore"
    },
    {
        id: 8,
        name:"Rajesh",
        city:"Mumbai"
    },
    {
        id: 9,
        name:"Sneha",
        city:"Pune"
    },
    {
        id: 10,
        name:"Vikram",
        city:"Delhi"
    },
    {
        id: 11,
        name:"Kavya",
        city:"Hyderabad"
    },
    {
        id: 12,
        name:"Arjun",
        city:"Kolkata"
    },
    {
        id: 13,
        name:"Meera",
        city:"Jaipur"
    },
    {
        id: 14,
        name:"Rohit",
        city:"Ahmedabad"
    },
    {
        id: 15,
        name:"Divya",
        city:"Surat"
    },
    {
        id: 16,
        name:"Karan",
        city:"Lucknow"
    },
    {
        id: 17,
        name:"Pooja",
        city:"Kanpur"
    },
    {
        id: 18,
        name:"Amit",
        city:"Nagpur"
    },
    {
        id: 19,
        name:"Ritu",
        city:"Indore"
    },
    {
        id: 20,
        name:"Suresh",
        city:"Thane"
    },
    {
        id: 21,
        name:"Anita",
        city:"Bhopal"
    },
    {
        id: 22,
        name:"Deepak",
        city:"Visakhapatnam"
    },
    {
        id: 23,
        name:"Sunita",
        city:"Pimpri"
    },
    {
        id: 24,
        name:"Manish",
        city:"Patna"
    },
    {
        id: 25,
        name:"Neha",
        city:"Vadodara"
    },
    {
        id: 26,
        name:"Ravi",
        city:"Ghaziabad"
    },
    {
        id: 27,
        name:"Shweta",
        city:"Ludhiana"
    },
    {
        id: 28,
        name:"Anil",
        city:"Agra"
    },
    {
        id: 29,
        name:"Preeti",
        city:"Nashik"
    },
    {
        id: 30,
        name:"Sachin",
        city:"Faridabad"
    },
    {
        id: 31,
        name:"Rekha",
        city:"Meerut"
    },
    {
        id: 32,
        name:"Nitin",
        city:"Rajkot"
    },
    {
        id: 33,
        name:"Sonia",
        city:"Kalyan"
    },
    {
        id: 34,
        name:"Manoj",
        city:"Vasai"
    },
    {
        id: 35,
        name:"Geeta",
        city:"Varanasi"
    },
    {
        id: 36,
        name:"Rahul",
        city:"Srinagar"
    },
    {
        id: 37,
        name:"Usha",
        city:"Aurangabad"
    },
    {
        id: 38,
        name:"Vijay",
        city:"Dhanbad"
    },
    {
        id: 39,
        name:"Nisha",
        city:"Amritsar"
    },
    {
        id: 40,
        name:"Ashok",
        city:"Allahabad"
    },
    {
        id: 41,
        name:"Riya",
        city:"Ranchi"
    },
    {
        id: 42,
        name:"Sunil",
        city:"Howrah"
    },
    {
        id: 43,
        name:"Kavita",
        city:"Coimbatore"
    },
    {
        id: 44,
        name:"Prakash",
        city:"Jabalpur"
    },
    {
        id: 45,
        name:"Seema",
        city:"Gwalior"
    },
    {
        id: 46,
        name:"Ajay",
        city:"Vijayawada"
    },
    {
        id: 47,
        name:"Radha",
        city:"Jodhpur"
    },
    {
        id: 48,
        name:"Naveen",
        city:"Madurai"
    },
    {
        id: 49,
        name:"Lata",
        city:"Raipur"
    },
    {
        id: 50,
        name:"Asha",
        city:"Chandigarh"
    }
]
  return (
    <>
   
    
    <div className="App">

      {/* <h1 style=" backgroundColor: 'lightblue' ">First batch is the best batch</h1> */}

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h1 style={{ backgroundColor: 'lightblue', textAlign: 'center', borderRadius: '10px', width: 'min(90vw, 500px)',
                    padding: '10px', margin: '10px' }}>
                    Lucky Loopers
                </h1>
            </div>
       
             <AboutUs />
      
            <div className="membersArea">
                <div className="submitWrap">
                    <SubmitBtn p={people} />
                </div>

                <div className="membersWrap">
                    <div className="memberList">
          {/* //map function expects return function  */}
          {people.map(function(member){
            return <Member key={member.id} name={member.name} city={member.city} id={member.id} />
          })}
          
          {

          
          /* <Member name="Irfan" city="Thanjavur"/>
          <Member name="Asif" city="Nandavaram"/>
          <Member name="Safi" city="Atmakur"/>
          <Member name="Ruby" city="Nellore"/>
          <Member /> */
          }

                    </div>
                </div>
            </div>
   
   
    </div>
    </>
  );
}

export default App;
