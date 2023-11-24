import React from "react";

class Profile extends React.Component {
    render() {
        return (
            <main class="l-main">
            <section class="profile section">
                <div class="profile__container bd-grid">
                    <div class="profile__data">
                        <h3 class="profile__title">Account Details</h3>
                        <hr />
                        <br />
                        <p class="profile__description">Name</p>
                        <input type="text" class="profile__input" placeholder="Yash" value="Yash" />
                        <p class="profile__description">Location</p>
                        <input type="text" class="profile__input" placeholder="3b2, Guesture @ Alta Vista, Bengaluru" value="3b2, Guesture @ Alta Vista, Bengaluru" />
                        <p class="profile__description">Email address</p>
                        <input type="text" class="profile__input" placeholder="yash.talele97@gmail.com" value="yash.talele97@gmail.com" />
                        <p class="profile__description">Phone number</p>
                        <input type="text" class="profile__input" placeholder="1234567890" value="1234567890" />
                        <a href="./index.html" class="button">Update Profile</a>
                    </div>
                    <div class="new__sneaker">
                        <div class="new__sneaker-card">
                    <img src="/img/profile.jpg" alt="" class="profile__img" />
                    <div class="new__sneaker-overlay">
                        <a href="/" class="button">Update Profile Image</a>
                    </div>
                    </div>
                    </div>
                </div>
            </section>
            </main>
        );
    }
}

export default Profile;