function Notification(props) {
  const { icon, children, notifColor, message } = props;
  return (
    <div className={`${notifColor} notification-box`}>
      <div className="notif-content-box">
        <img className="icon" src={icon} />
        <p>{message}</p>
      </div>
    </div>
  );
}

const element = (
  <div className="main-page">
    <h1>Notifications</h1>

    <Notification
      notifCcolor="info"
      icon="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      message="Information Message"
    />
    <Notification
      notifColor="success"
      icon="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      message="Success Message"
    />
    <Notification
      notifColor="warning"
      icon="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      message="Warning Message"
    />
    <Notification
      notifColor="danger"
      icon="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      message="Error Message"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
