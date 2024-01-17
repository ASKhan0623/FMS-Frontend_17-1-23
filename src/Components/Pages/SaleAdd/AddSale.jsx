import axios from 'axios';
import React,{useState, useEffect} from 'react';
import '../../Pages/PageComponent.css';
import SelectField from './SelectField';
import MultiLineField from './TextArea';
import ServicesTable from './ServicesTable';
import InputField from './InputField';
import AttachDoc from './AttachDoc';
import SubmitBtn from './SubmitBtn';
import { useNavigate } from 'react-router-dom';

const AddSale = () => {

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
  const [services, setServices] = useState([]);
  const [saleadds, setSaleadds] = useState([]);  

  const navigate = useNavigate();

// Function to handle changes in service data
const handleServiceChange = (index, field, value) => {
  const updatedServices = [...services];
  updatedServices[index][field] = value;
  setServices(updatedServices);
};

const removeService = (index) => {
  const updatedServices = [...services];
  updatedServices.splice(index, 1);
  setServices(updatedServices);
};

      // Function to handle services data when the form is submitted
const handleServicesData = (data) => {
  console.log('Received values of form:', data);
  setServices(data.users);
    // You can handle the data as needed (e.g., submit to the server)
  };

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
        // Create an object with the required data structure
        // const total_quantity = services.reduce((sum, service) => sum + parseInt(service.quantity), 0);
        // const gross_total = services.reduce((sum, service) => sum + parseInt(service.service_total), 0);
        
        const dataToSend = {
          customer: customer,
          company: company,
          biller: biller,
          otax: otax,
          odiscount: odiscount,
          discount: discount,
          sstatus: sstatus,
          pstatus: pstatus,
          salenote: slnote,
          staffnote: stnote,
          services: services.map(service => ({
            service_description: service.services,
            unit_price: service.uprice,
            quantity: service.quantity,
            total_quantity: service.quantity,
            currency: service.selection,
            roe: service.roe,
            service_total: service.total,
            gross_total: service.total,
          })),
        };

        // Send POST request
        const response = await axios.post("http://127.0.0.1:8000/api/saleadd", dataToSend);
    
        console.log('Response:', response.data);
        
        alert("Data has been Submitted");
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
        navigate('/sale/salelist');
      } catch (err) {
        console.error('Error:', err.response);
        alert("Something Went Wrong");
      }
    }
    

  const textAreasConfig = [
    {
      label: 'Sale Note',
      showCount: false,
      maxLength: 150,
      // onChange: (e) => console.log('First TextArea:', e.target.value),
      placeholder: 'Sale Note',
      height: 45,
      resize: 'vertical',
      width: 370,
      marginTop: 40,
      value:{slnote},
      onChange: (event) => setSlnote(event.target.value),
    },
    {
      label: 'Staff Note',
      showCount: false,
      maxLength: 150,
      // onChange: (e) => console.log('Second TextArea:', e.target.value),
      placeholder: 'Staff Note',
      height: 45,
      resize: 'both',
      width: 370,
      marginTop: 40,
      value:{stnote},
      onChange:(event) => setStnote(event.target.value),
    },
    
    
  ];

  return (

      <div className='AddSaleBoard'>
        <h1>Add Sale</h1>
        <div className='SelectionArea'>
        <SelectField
            label="Customer Name"
            placeholder="Select Customer Name"
            options={[
              { value: 'Deals Orbs', label: 'Deals Orbs' },
              { value: 'Furniture Mecca', label: 'Furniture Mecca' },
              { value: 'Zameer Ansari', label: 'Zameer Ansari' },
              { value: 'Sialkot Bakers', label: 'Sialkot Bakers' },
              { value: 'Turkish Mud Coffee', label: 'Turkish Mud Coffee' },
            ]}
            value={customer}
            onChange={(event) =>
              {
                setCustomer(event);      
              }}
          />

          <SelectField
            label="Company Name"
            placeholder="Select Company Name"
            options={[
              { value: 'Sky Holidays', label: 'Sky Holidays' },
              { value: 'Nexzell', label: 'Nexzell' },
              { value: 'ZelleSolutions', label: 'ZelleSolutions' },
            ]}
            value={company}
            onChange={(event) =>
              {
                setCompany(event);      
              }}
          />

          <SelectField
            label="Biller Name"
            placeholder="Select Biller Name"
            options={[
              { value: 'Mr. Osama', label: 'Mr. Osama' },
              { value: 'Miss Faraya', label: 'Miss Faraya' },
            ]}
            value={biller}
            onChange={(event) =>
              {
                setBiller(event);      
              }}
          />

          {/* <ServicesTable /> */}
          <ServicesTable
            services={services}
            handleServiceChange={handleServiceChange}
            handleServicesData={handleServicesData}
            removeService={removeService}
          />

          <SelectField
            label="Tax Order"
            placeholder="Select Order Tax %"
            options={[
              { value: '5', label: '5' },
              { value: '10', label: '10' },
              { value: '13', label: '13' },
              { value: '15', label: '15' },
            ]}
            value={otax}
            onChange={(event) =>
              {
                setOtax(event);      
              }}
          />

          <SelectField
            label="Discount Order"
            placeholder="Select Order of Discount"
            options={[
              { value: 'Discount Amount', label: 'Discount Amount' },
              { value: 'Discount %', label: 'Discount %' },
            ]}
            value={odiscount}
            onChange={(event) =>
              {
                setOdiscount(event);      
              }}
          />

          <InputField
            label="Discount Amount / Percentage"
            placeholder="Enter Discount in terms of Amount or %"
            value={discount}
            onChange={(event) =>
              {
                setDiscount(event.target.value);      
              }}
          />

          <AttachDoc label="Attach Documents" />

          <SelectField
            label="Sale Status"
            placeholder="Sale Status"
            options={[
              { value: 'Complete', label: 'Complete' },
              { value: 'In-Complete', label: 'In-Complete' },
              { value: 'Partial', label: 'Partial' },
            ]}
            value={sstatus}
            onChange={(event) =>
              {
                setSstatus(event);      
              }}
          />

          <SelectField
            label="Payment Status"
            placeholder="Payment Status"
            options={[
              { value: 'Complete', label: 'Complete' },
              { value: 'In-Complete', label: 'In-Complete' },
              { value: 'Partial', label: 'Partial' },
            ]}
            value={pstatus}
            onChange={(event) =>
              {
                setPstatus(event);      
              }}
          />

          <MultiLineField textAreas={textAreasConfig} />

          <SubmitBtn onClick={save} />
          </div>
      </div>

  )
}

export default AddSale