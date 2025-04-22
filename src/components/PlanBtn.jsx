
import {Button} from '@mui/material'
import { useNavigate } from "react-router-dom"

const PlanButton = () => {

    const navegate = useNavigate()
    
    
   return  (
       <Button onClick={() => navegate('/Plan')} sx={{width: {xs: 150, lg: 200}, backgroundColor: '#0e8684', color: '#fff', height: '45px'}}>Create your plan</Button>
   )
}

export default PlanButton