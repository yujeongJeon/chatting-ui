import { TUser } from '$types/user';
import style from './ProfileImageCircle.module.scss';
import classNames from 'classnames/bind';
import { SENDER } from '$constants/data';

const cx = classNames.bind(style);

type ProfileImageCircleProps = {
    user: TUser;
};

export default function ProfileImageCircle({ user }: ProfileImageCircleProps) {
    const { profile } = user;
    return <img src={profile} width="50" height="50" className={cx('profile')} alt="profile-img" />;
}

export function YujeongProfile() {
    return <ProfileImageCircle user={SENDER.yujeong} />;
}

export function HyeonbinProfile() {
    return <ProfileImageCircle user={SENDER.hyeonbin} />;
}
