function Profile (props) {
  return (
    <section className='profile section'>
      <div className='container'>
        <div className='columns'>
          <div className='column is-two-fifths'>
            <h1 className='title is-size-1'>{props.profile.name}</h1>
            <p className='subtitle'>{props.profile.title}</p>
          </div>
          <div className='column is-2'>
            <figure className='image is-128x128'>
              <img
                alt=''
                className='is-rounded'
                src={props.profile.photo}
              ></img>
            </figure>
          </div>
          <div className='column has-text-grey-light has-text-right-tablet'>
            <p className='has-text-weight-light has-text-white'>{props.profile.city}</p>
            <p className='has-text-weight-light'><a className="has-text-white" href={'tel:' + props.profile.phone}>{props.profile.phone}</a></p>
            <p className='has-text-weight-light'><a className="has-text-white" href={'mailto:' + props.profile.mail}>{props.profile.mail}</a></p>

            <div className='social-icon'>
              <a
                target='_blank'
                rel='noreferrer'
                href={props.social.facebook.link}
                className='facebook'
                title='Facebook'
              >
                {props.social.facebook.name}
                <svg viewBox='0 0 512 512' height='2rem' width='2rem'>
                  <path d='M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z' />
                </svg>
              </a>
            </div>
            <div className='social-icon'>
              <a
                target='_blank'
                rel='noreferrer'
                href={props.social.linkedin.link}
                className='linkedin'
                title='Linkedin'
              >
                {props.social.linkedin.name}
                <svg viewBox='0 0 512 512' width='2rem'>
                  <path d='M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z' />
                </svg>
              </a>
            </div>
            <div className='social-icon'>
              <a
                target='_blank'
                rel='noreferrer'
                href={props.social.github.link}
                className='github'
                title='Github'
              >
                {props.social.github.name}
                <svg viewBox='0 0 512 512' height='2rem' width='2rem'>
                  <path d='M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z' />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile
