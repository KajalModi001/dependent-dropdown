import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';

export default function Dependentdropdown() {
    const [allstate, setallstate] = useState([
        {'id': 1, 'name': 'Gujarat'},
        {'id': 2, 'name': 'Maharashtra'},
        {'id': 3, 'name': 'Rajasthan'}
    ])
    
    const [allcity, setallcity] = useState([
        {'id': 1, 'name': 'Ahmedabad', 'state_id': 1},
        {'id': 2, 'name': 'Nadiad', 'state_id': 1},
        {'id': 3, 'name': 'Surat', 'state_id': 1},
        {'id': 4, 'name': 'Mehsana', 'state_id': 1},
        {'id': 5, 'name': 'Patan', 'state_id': 1},
        {'id': 6, 'name': 'Mumbai', 'state_id': 2},
        {'id': 7, 'name': 'Pune', 'state_id': 2},
        {'id': 8, 'name': 'Thane', 'state_id': 2},
        {'id': 9, 'name': 'Solapur', 'state_id': 2},
        {'id': 10, 'name': 'Nagpur', 'state_id': 2},
        {'id': 11, 'name': 'Jaipur', 'state_id': 3},
        {'id': 12, 'name': 'Udaipur', 'state_id': 3},
        {'id': 13, 'name': 'Ajmer', 'state_id': 3},
        {'id': 14, 'name': 'Kota', 'state_id': 3},
        {'id': 15, 'name': 'Sirohi', 'state_id': 3}
    ])

    const [result, setresult] = useState([])


    function handleChange(event) {
        const selectedstate = event.target.value 
    
        const filteredstate = allcity.filter(item => item.state_id == selectedstate)

        console.log(filteredstate)
        setresult(filteredstate)

      }
  return (
    <>
        <br/>
        <div><center>Dependent Dropdwon</center></div>
        <br/>
     
            <Form.Select aria-label="Default select example" onChange={handleChange}> 
            {allstate.map((item)=>(
                <option value={item.id}>{item.name}</option> 
                ))}
            </Form.Select>

        <br/>
        <Form.Select aria-label="Default select example" onChange={handleChange}> 
            {result.map((item1)=>(
                <option value={item1.id}>{item1.name}</option> 
                ))}
            </Form.Select>
       


    </>
  )
}
