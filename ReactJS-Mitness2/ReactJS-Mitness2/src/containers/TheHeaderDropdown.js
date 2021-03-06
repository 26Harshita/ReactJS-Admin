import React from 'react'
import {
  Link
} from 'react-router-dom'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const TheHeaderDropdown = () => {
  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
      <CIcon name="cil-user"/>
        <div className="c-avatar">
          <CImg
            
            className="cil-user"
            alt="admin@bootstrapmaster.com"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Account</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-user" className="mfe-2" />
         <Link  to="/admin" >AdminProfile</Link> 
          <CBadge color="info" className="mfs-auto"></CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-settings" className="mfe-2" />
 <Link to="/change" >ChangePassword</Link> 
          <CBadge color="success" className="mfs-auto"></CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-credit-card" className="mfe-2" />
          ForgotPassword
          <CBadge color="danger" className="mfs-auto"></CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-lock-locked" className="mfe-2" />
          Signout
          <CBadge color="warning" className="mfs-auto"></CBadge>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
