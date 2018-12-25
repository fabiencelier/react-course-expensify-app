import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is : {props.info}</p>
  </div>
)

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info, please don't share</p>}
      <WrappedComponent {...props} />
    </div>
  )
}

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {
        props.isAuth
        ? <WrappedComponent {...props} />
        : <p>Authentication required</p>
      }
    </div>
  )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
// ReactDOM.render(<AdminInfo isAdmin={true} info="my info" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth={false} info="my info" />, document.getElementById('app'));