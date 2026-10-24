function notifications({notifications = []}) {
    return (
        <div className="notifications">
            <h1>Notifications</h1>
            <p>Stay updated with recent outbreaks in the United States.</p>
            {notifications.map((notification, index) => (
                <div className="notification" key={index}>
                    <p>{notification}</p>
                </div>
            ))}

        </div>
    );

}

export default notifications;