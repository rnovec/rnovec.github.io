function Footer (props) {
  return (
    <div>
      <footer className='footer'>
        <div className='content has-text-centered'>
          <a href="Raul Novelo CV.pdf" download>
            Download CV
          </a>
          <br />
          Copyright © {new Date().getFullYear()} by {props.name}
        </div>
      </footer>

      <footer className='line has-background-light'></footer>
    </div>
  )
}

export default Footer
