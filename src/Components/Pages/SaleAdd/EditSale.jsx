import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../../Pages/PageComponent.css';
import SelectField from './SelectField';
import MultiLineField from './TextArea';
import ServicesTable from './ServicesTable';
import InputField from './InputField';
import AttachDoc from './AttachDoc';
import SubmitBtn from './SubmitBtn';
import { useLocation, useParams } from 'react-router-dom';

const EditSale = (props) => {
    const location = useLocation();
    const [customer, setCustomer] = useState('');
    const [company, setCompany] = useState('');
    const [biller, setBiller] = useState('');
    const [otax, setOtax] = useState('');
    const [odiscount, setOdiscount] = useState('');
    const [discount, setDiscount] = useState('');
    const [sstatus, setSstatus] = useState('');
    const [pstatus, setPstatus] = useState('');
    const [slnote, setSlnote] = useState('');
    const [stnote, setStnote] = useState('');
    const [saleadds, setSaleadds] = useState([]);
    const { id } = useParams();


  useEffect(() => {
    (async () => {
      const result = await axios.get("http://127.0.0.1:8000/api/saleadd");
      setSaleadds(result.data);

      if (location.state) {
        setCustomer(location.state.customer);
        setCompany(location.state.company);
        setBiller(location.state.biller);
        setOtax(location.state.otax);
        setOdiscount(location.state.odiscount);
        setDiscount(location.state.discount);
        setSstatus(location.state.sstatus);
        setPstatus(location.state.pstatus);
        setSlnote(location.state.salenote);
        setStnote(location.state.staffnote); 
        console.log(location.state)
      }
    })();
  }, [location.state]);

  console.log(stnote);
  console.log(slnote);

const Update = async (event) => {
    event.preventDefault();

    try {
      const saleToUpdate = saleadds.find(u => u.id === parseInt(id));
      if (!saleToUpdate) {
        alert("Sale not found");
        return;
      }

      await axios.put(`http://127.0.0.1:8000/api/saleadd/${saleToUpdate.id}`, {
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

      alert("Sale Data has been Updated");
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

    } catch (err) {
      console.error(err);
      alert("Sale Data Registration Failed");
    }
  };

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
      value:location.state.salenote,
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
      value:location.state.staffnote,
      onChange:(event) => setStnote(event.target.value),
    }, 
  ];

  return (

      <div className='AddSaleBoard'>
        <h1>Edit Sale</h1>
        <form onSubmit={Update} className='SelectionArea'>
        <SelectField
            label="Customer Name"
            placeholder="Select Customer Name"
            options={[
              { value: 'Deals Orbs', label: 'Deals Orbs' },
              { value: 'Furniture Mecca', label: 'Furniture Mecca' },
              { value: 'Zameer Ansari', label: 'Zameer Ansari' },
              { value: 'Sialkot Bakers', label: 'Sialkot Bakers' },
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

          <ServicesTable />

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

          <SubmitBtn htmlType="submit" />
          </form>
      </div>

  )
}

export default EditSale