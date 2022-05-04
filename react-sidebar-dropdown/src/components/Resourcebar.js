import React from 'react'
import { Container,TextField,Button } from '@material-ui/core'
import Autocomplete from '@mui/material/Autocomplete';
const namespaces=[
  {label:'all'},
  {label:'default'},
  {label:'kube-system'},
  {label:'kube-release'}
]
const resources=[
  {label:'pods'},
  {label:'deployments'},
  {label:'secrets'},
  {label:'config maps'},
  {label:'replicas'}
]

export const Resourcebar = () => {
  return (
    <div>
     <Container style={{padding:'15px',marginTop:'10px',backgroundColor:'white',display:'flex',width:'700px',justifyContent:'space-between', align:"center"}}>
     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={namespaces}
      sx={{ width: 250 }}
      renderInput={(params) => <TextField {...params} label="namespace" />}
    />
     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={resources}
      sx={{ width: 250 }}
      renderInput={(params) => <TextField {...params} label="resource" />}
    />
     <Button color="primary" variant="contained">Submit</Button>
     </Container>

    </div>
  )
}
