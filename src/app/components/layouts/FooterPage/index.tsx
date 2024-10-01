import { SvgIcon } from "@/app/assets/icons"
import Image from "next/image"
import ScrollToTop from "../../shared/scroll-to-top"
import styles from "./index.module.scss"

const FooterPage = () => {
  return (
    <footer className="flex flex-col mb-5 mt-10 h-full items-center">
      <div className="container px-[140px]">
        <nav className="flex justify-between">
          <span className="text-sm text-[#03030f80]">© 2024 Tuanxu. All rights reserved.</span>
        </nav>
        <div className="flex flex-col fixed gap-2 left-6 bottom-6">
          <a href="https://www.linkedin.com/in/tuanxu5/" target="_blank">
            <button className={styles.contact_item}>
              <Image src={SvgIcon.IconLinkdIn} alt="icon" width={18} height={18} />
            </button>
          </a>
          <a href="https://github.com/Tuanxu5" target="_blank">
            <button className={styles.contact_item}>
              <Image src={SvgIcon.IconGithub} alt="icon" width={18} height={18} />
            </button>
          </a>

          <a href="https://www.instagram.com/tuann__n/" target="_blank">
            <button className={styles.contact_item}>
              <Image src={SvgIcon.IconInstagram} alt="icon" width={18} height={18} />
            </button>
          </a>
          <a href="https://www.facebook.com/tunnxu5/" target="_blank">
            <button className={styles.contact_item}>
              <Image src={SvgIcon.IconFacebook} alt="icon" width={18} height={18} />
            </button>
          </a>
        </div>
        <ScrollToTop />
      </div>
    </footer>
  )
}

export default FooterPage
