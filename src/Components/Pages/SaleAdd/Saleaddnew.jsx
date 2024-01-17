import axios from 'axios';
import {useEffect, useState } from "react";

function Student()
{
  const [id, setId] = useState('');
  const [customer, setCustomer] = useState("");
  const [company, setCompany] = useState("");
  const [biller, setBiller] = useState("");
  const [otax, setOtax] = useState("");
  const [odiscount, setOdiscount] = useState("");
  const [discount, setDiscount] = useState("");
  const [sstatus, setSstatus] = useState("");
  const [pstatus, setPstatus] = useState("");
  const [slnote, setSlnote] = useState("");
  const [stnote, setStnote] = useState("");
  const [saleadds, setSaleadds] = useState([]);

  useEffect(() => {
    (async () => await Load())();
    }, []);
  
    async function  Load()
    {
       const result = await axios.get(
           "http://127.0.0.1:8000/api/saleadd");
           setSaleadds(result.data);
           console.log(result.data);
    }


  async function save(event) {
    event.preventDefault();
    try {

      console.log('Customer:', customer);
      console.log('Company:', company);
      console.log('Biller:', biller);
      console.log('Otax:', otax);
      console.log('Odiscount:', odiscount);
      console.log('Discount:', discount);
      console.log('Sstatus:', sstatus);
      console.log('Pstatus:', pstatus);
      console.log('Slnote:', slnote);
      console.log('Stnote:', stnote);
  
      // Send POST request
      const response = await axios.post("http://127.0.0.1:8000/api/saleadd", {
        customer: customer,
        company: company,
        biller: biller,
        otax: otax,
        odiscount: odiscount,
        discount: discount,
        sstatus: sstatus,
        pstatus: pstatus,
        salenote: slnote,
        staffnote: stnote
      });
  
      console.log('Response:', response.data); // Log the response for debugging
  
      alert("Student Registration Successful");
      setId("");
      setCustomer("");
      setCompany("");
      setBiller("");
      setOtax("");
      setOdiscount("");
      setDiscount("");
      setSstatus("");
      setPstatus("");
      setSlnote("");
      setStnote("");
      Load();
    } catch (err) {
      console.error('Error:', err.response); // Log the error for debugging
      alert("Something Went Wrong");
    }
  }
  
    
//      async function save(event)
//     {
//         event.preventDefault();
//     try
//         {
//          await axios.post("http://127.0.0.1:8000/api/saleadd",
//         {
        
//           customer: customer,
//           company: company,
//           biller: biller,
//           otax: otax,
//           odiscount: odiscount,
//           discount: discount,
//           sstatus: sstatus,
//           pstatus: pstatus,
//           slnote: slnote,
//           stnote: stnote

        
//         });
//           alert("Student Registation Successfully");
//           setId("");
//           setCustomer("");
//           setCompany("");
//           setBiller("");
//           setOtax("");
//           setOdiscount("");
//           setDiscount("");
//           setSstatus("");
//           setPstatus("");
//           setSlnote("");
//           setStnote("");
//           Load();
        
//         }
//     catch(err)
//         {
//           alert("Some Thing Went Wrong");
//         }
//    }
   
   
   async function editsaleadd(saleadds)
   {
    setCustomer(saleadds.customer);
    setCompany(saleadds.company);
    setBiller(saleadds.biller);
    setOtax(saleadds.otax);
    setOdiscount(saleadds.odiscount);
    setDiscount(saleadds.discount);
    setSstatus(saleadds.sstatus);
    setPstatus(saleadds.pstatus);
    setSlnote(saleadds.slnote);
    setStnote(saleadds.stnote); 
    setId(saleadds.id);
    
   }



   async function Deletesaleadd(id)
   {
       
        await axios.delete("http://127.0.0.1:8000/api/saleadd/" + id); 
        alert("Student deleted Successfully");
        Load();
   
   }



   async function update(event)
   {
    event.preventDefault();

   try
       {
        
        await axios.put("http://127.0.0.1:8000/api/saleadd/"+ saleadds.find(u => u.id === id).id || id,
       {
         id: id,
         customer: customer,
         company: company,
         biller: biller,
         otax: otax,
         odiscount: odiscount,
         discount: discount,
         sstatus: sstatus,
         pstatus: pstatus,
         salenote: slnote,
         staffnote: stnote
       
       });
         alert("Registation Updateddddd");
         setId("");
         setCustomer("");
         setCompany("");
         setBiller("");
         setOtax("");
         setOdiscount("");
         setDiscount("");
         setSstatus("");
         setPstatus("");
         setSlnote("");
         setStnote("");
         Load();
       
       }
   catch(err)
       {
         alert("Data Registation Failed");
       }
  }

  return (
    <div>
       <h1>Details</h1>
       <div class="container" >
          <form>
              <div class="form-group">
               <input  type="text" class="form-control" id="customer_id" hidden
               value={id}
               onChange={(event) =>
                {
                  setId(event.target.value);      
                }}
               
               />
                <label>Customer Name</label>
                <input  type="text" class="form-control" id="customer"
                value={customer}
                onChange={(event) =>
                  {
                    setCustomer(event.target.value);      
                  }}
                />
              </div>

              <div class="form-group">
                <label>company</label>
                <input  type="text" class="form-control" id="company" 
                 value={company}
                  onChange={(event) =>
                    {
                      setCompany(event.target.value);      
                    }}
                />
              </div>

              <div class="form-group">
                <label>Biller</label>
                <input type="text" class="form-control" id="biller" 
                value={biller}
                onChange={(event) =>
                  {
                    setBiller(event.target.value);      
                  }}
                />
              </div>

              <div class="form-group">
                <label>Otax</label>
                <input type="number" class="form-control" id="otax" 
                value={otax}
                onChange={(event) =>
                  {
                    setOtax(event.target.value);      
                  }}
                />
              </div>

              <div class="form-group">
                <label>Odiscount</label>
                <input type="text" class="form-control" id="odiscount" 
                  value={odiscount}
                onChange={(event) =>
                  {
                    setOdiscount(event.target.value);      
                  }}
                />
              </div>

              <div class="form-group">
                <label>Discount</label>
                <input type="number" class="form-control" id="discount" 
                  value={discount}
                onChange={(event) =>
                  {
                    setDiscount(event.target.value);      
                  }}
                />
              </div>

              <div class="form-group">
                <label>Sale Status</label>
                <input type="text" class="form-control" id="sstatus" 
                  value={sstatus}
                onChange={(event) =>
                  {
                    setSstatus(event.target.value);      
                  }}
                />
              </div>

              <div class="form-group">
                <label>Payment Status</label>
                <input type="text" class="form-control" id="pstatus" 
                  value={pstatus}
                onChange={(event) =>
                  {
                    setPstatus(event.target.value);      
                  }}
                />
              </div>

              <div class="form-group">
                <label>Sale Note</label>
                <input type="text" class="form-control" id="slnote" 
                  value={slnote}
                onChange={(event) =>
                  {
                    setSlnote(event.target.value);      
                  }}
                />
              </div>

              <div class="form-group">
                <label>Staff Note</label>
                <input type="text" class="form-control" id="stnote" 
                  value={stnote}
                onChange={(event) =>
                  {
                    setStnote(event.target.value);      
                  }}
                />
              </div>

              <button   class="btn btn-primary mt-4"  onClick={save}>Register</button>
              <button   class="btn btn-warning mt-4"  onClick={update}>Update</button>  
            </form>
          </div>
<div>
    <br/>

<table class="table table-dark" align="center">
  <thead>
    <tr>
      <th scope="col">Customer Id</th>
      <th scope="col">Customer Name</th>
      <th scope="col">Company</th>
      <th scope="col">Biller</th>
      <th scope="col">Otax</th>
      <th scope="col">Odiscount</th>
      <th scope="col">Discount</th>
      <th scope="col">Sale Status</th>
      <th scope="col">Payment Status</th>
      <th scope="col">Sale Note</th>
      <th scope="col">Staff Note</th>
    </tr>
  </thead>
       {saleadds.map(function fn(saleadd)
       {
        console.log(saleadd);
            return(
            <tbody>
                <tr>
                <th scope="row">{saleadd.id} </th>
                <td>{saleadd.customer}</td>
                <td>{saleadd.company}</td>
                <td>{saleadd.biller}</td>
                <td>{saleadd.otax}</td>
                <td>{saleadd.odiscount}</td>
                <td>{saleadd.discount}</td>
                <td>{saleadd.sstatus}</td>
                <td>{saleadd.pstatus}</td>
                <td>{saleadd.salenote}</td>
                <td>{saleadd.staffnote}</td>        
                <td>
                    <button type="button" class="btn btn-warning"  onClick={() => editsaleadd(saleadd)} >Edit</button>  
                    <button type="button" class="btn btn-danger" onClick={() => Deletesaleadd(saleadd.id)}>Delete</button>
                </td>
                </tr>
            </tbody>
            );
            })}
            </table>
       </div>
       </div>
            );
        }
 
export default Student;