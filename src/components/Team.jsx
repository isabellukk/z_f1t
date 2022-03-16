export const Team = (props) => {
  return (<div id='team' className='container'>
    <div className='row'>
      <h2>MEET THE TEAM</h2>
      <div className='container'>
        <div>
          <div>
            {
              props.data
                ? props.data.map((d, i) => (<div key={`${d.name}-${i}`} className='col-sm-10 col-md-8 col-lg-6'>
                  <div className='trainer-img'>
                    <img src={d.img} alt=''/>
                  </div>
                  <div className='trainer-name'>
                    <h3>{d.name}
                    </h3><br/>
                  </div>
                  <div className='team-page-social'>
                    <div className='insta'>
                      <a href={`https://www.instagram.com/${d.ig}`} alt='insta'>
                        <i className='fa fa-instagram'></i>
                      </a>
                    </div>
                    <div className='text'>
                      <a href={`sms:(${d.tel})`}>
                        <i className='fa fa-comment-alt'></i>
                      </a>
                    </div>
                  </div>
                  <div className='trainer-offset'>
                    <div className='trainer-info '>
                      <p>{d.mission}</p>
                    </div>
                  </div>
                </div>))
                : 'loading'
            }
            <br/>
          </div>
        </div>
      </div>
    </div>
  </div>);
};
