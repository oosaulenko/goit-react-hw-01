import css from './Profile.module.css';

const Profile = (
    {
        name,
        tag,
        location,
        image,
        stats
    }) => {
    return (
        <div className={css.profile}>
            <div className={css.header}>
                <img
                    src={image}
                    className={css.avatar}
                    alt="User avatar"
                />
                <p className={css.name}>{name}</p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>

            <ul className={css.meta}>
                <li>
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li>
                    <span>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}

export default Profile;