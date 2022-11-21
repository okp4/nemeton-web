import React from 'react'
import { default as MUISnackbar } from '@mui/material/Snackbar'
import type { AlertProps } from '@mui/material/Alert'
import MuiAlert from '@mui/material/Alert'

type SnackbarProps = {
  severityLevel: 'error' | 'success'
  onClose: () => void
  isOpen: boolean
  message: string
  autoduration?: number
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export const Snackbar: React.FC<SnackbarProps> = ({
  severityLevel,
  onClose,
  autoduration = 3000,
  isOpen,
  message
}) => {
  return (
    <MUISnackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      autoHideDuration={autoduration}
      onClose={onClose}
      open={isOpen}
    >
      <Alert severity={severityLevel}>{message}</Alert>
    </MUISnackbar>
  )
}
