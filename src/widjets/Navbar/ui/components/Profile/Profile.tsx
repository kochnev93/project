import React from 'react';
import { cn } from 'shared/utils';
import { Image } from 'shared/ui/Image';
import { Stack } from 'shared/ui/Stack';
import * as style from './Profile.module.scss';

interface ProfileProps {
    className?: string;
}

export const Profile = (props: ProfileProps): React.ReactElement => {
    const { className } = props;
    return (
        <div className={cn(style.Profile, {}, [className])}>
            <Image
                src="https://bootstrapget.com/demos/one-bootstrap-admin-dashboard/assets/images/user1.png"
                wrapperClassName={style.Profile__image}
            />
            <Stack direction="column">
                <span>Hello,</span> <span>Mr. Yuki Michiels</span>
            </Stack>
        </div>
    );
};
