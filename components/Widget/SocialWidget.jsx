import { Icon } from '@iconify/react';
import Div from '../Div';
import Link from 'next/link';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link href="https://www.linkedin.com/company/thunderx-laminates" className="cs-center">
        <Icon icon="fa6-brands:linkedin-in" />
      </Link>
      <Link href="https://www.instagram.com/thunderx_laminates/" className="cs-center">
        <Icon icon="fa6-brands:instagram" />
      </Link>
      <Link href="https://www.youtube.com/watch?v=ryN5YpCfgyE" className="cs-center">
        <Icon icon="fa6-brands:youtube" />
      </Link>
      <Link href="https://www.facebook.com/thunderxlaminates/" className="cs-center">
        <Icon icon="fa6-brands:facebook" />
      </Link>
    </Div>
  );
}
