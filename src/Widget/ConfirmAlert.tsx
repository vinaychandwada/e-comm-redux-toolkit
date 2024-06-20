import React,{useEffect,useState} from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ConfirmAlert = ({title,id,conformRes}:{title:string,id:number,conformRes:any}) => {

  const [open, setOpen] = React.useState(false);
  
  useEffect(() => {
    setOpen(true);
    // getData();
  }, []);

  const handleClose = (res:any) => {
    setOpen(false);
  };
  
  const click = (ans:string) => {
    conformRes(id,ans);
    setOpen(false);
    // handleClose();
  }

  return (
    
    <>
    <Dialog
        open={open}
        onClose={()=>{handleClose('NO')}  }
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>
        {/* <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent> */}
        <DialogActions>
          <Button className="conform" onClick={()=>{ click('NO') }}>Disagree</Button>
          <Button className="conform" onClick={()=>{ click('YES') }} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
    
  )
}

export default ConfirmAlert