import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <div className='container header__inner'>
        <a className='header__logo' href=''>Alias</a>

        <div className='header__block'>
          <a className='header__block-link' href=''>ПРАВИЛА</a>
          <a className='header__block-link' href=''>ИГРАТЬ</a>
        </div>
      </div>
    </header>
  )
}

export default Header