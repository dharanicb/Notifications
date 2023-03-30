const Notification = props => {
  //  Write your code here.
  const containerClassName = {`box-content ${className}`}

  return (
    <div className={containerClassName}>
      <img className="icon" src={iconUrl} />
      <p className="text-content">{textContent}</p>
    </div>
  )
};

const element = (
  //  Write your code here.   
  <div className = "flex-content">
  <h1 className = "heading">Notification</h1>
   <Notification className = "box" iconUrl = "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" textContent = "Information Massage"></Notification>
   <Notification className = "box1" iconUrl = "https://assets.ccbp.in/frontend/react-js/success-icon-img.png" textContent = "Information Massage"></Notification>
   <Notification className = "box2" iconUrl = "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" textContent = "Information Massage"></Notification>
   <Notification className = "box3" iconUrl = "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" textContent = "Information Massage"></Notification>
</div>

)

ReactDOM.render(element, document.getElementById('root'))
