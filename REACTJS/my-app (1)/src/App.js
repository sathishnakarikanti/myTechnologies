import React from 'react';
import About from './programs/About';
import Error from './programs/Error';
import Filter from './programs/filter';
import RestrictedForm from './programs/restrictedForm';
import EditForm from './programs/edit';
import Form1 from './programs/form1';
import FormCrud from './programs/formCrud';
import Antd1 from './programs/antd1';
import Antd from './programs/antd';
import DynamicForm from './programs/showTerms';
import DynamicFormEdit1 from './programs/dynamicformedit1'
import Form from './programs/form';
import Crud from './forms/formcrud';
import DynamicFormEdit2 from './programs/dynamicformedit2';
import Crudoperation from './programs/crudoperationsbyform';
import DigitNum from './programs/array';
// import Imageupload from './programs/imageupload'



import { Route,Switch } from 'react-router-dom';
import DependentInput from './programs/dependentinput';
const App = () => {
  return (
   <>
   <Switch>
<Route path="/about" component={About}/>
<Route path="/error" component={Error}/>
<Route path="/filter" component={Filter}/>
<Route path="/form" component={RestrictedForm}/>
<Route path="/restrictedform" component={EditForm}/>

<Route path="/sampleform" component={Form1}/>
<Route path="/antd1" component={Antd1}/>
<Route path="/antd" component={Antd}/>
<Route path="/dynamicform" component={DynamicForm}/>
<Route path="/dynamicformedit1" component={DynamicFormEdit1}/>
<Route path="/Formc" component={Form}/>
<Route path="/crud" component={Crud}/>
<Route path="/formcrud" component={FormCrud}/>
<Route path="/crudoperations" component={Crudoperation}/>
<Route path="/digits" component={DigitNum}/>
<Route path="/dependentfields" component={DependentInput} />

{/* <Route path="/dynamicformedit2" component={DynamicFormEdit2}/> */}
{/* <Route path="/image" component={Imageupload}/> */}




















</Switch>
   </>
  );
}

export default App;