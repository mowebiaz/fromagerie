import Image from 'next-export-optimize-images/image'
import Link from 'next/link'

export const LogoContainer = () => {
  return (
    <div className="logo-container">
      <Link
        href="/"
        aria-label="Accueil"
      >
        <Image
          src="/logo.png"
          alt="logo"
          width={77}
          height={45}
          priority
        />
      </Link>
    </div>
  )
}
