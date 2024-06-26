import ApsMainExcel from '@/components/aps/aps.main.excel';
import { ComponentProp } from '@/interface/main.interface';
import { Dialog, DialogContent, DialogActions, Button, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';
import Slide from '@mui/material/Slide';
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function Aps(props: ComponentProp) {
  const { openComponent, setOpenComponent } = props
  return (
    <Dialog open={openComponent} onClose={() => setOpenComponent(false)} fullScreen TransitionComponent={Transition} >
      <DialogTitle>
        <div className='flex justify-between items-center'>
          <div>Module APS</div>
          <IconButton
            onClick={() => setOpenComponent(false)}
            edge="start"
            color="inherit"
            aria-label="close"
          >
            <CloseIcon className='text-[#5d5d5d]' />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent>
        <div className='flex flex-col gap-3'>
          <div className='bg-white  rounded-md p-3 '>
            <ApsMainExcel />
          </div>
        </div>
      </DialogContent>
      <DialogActions>
      </DialogActions>
    </Dialog>
  )
}

export default Aps