import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import declaration_logo from '../assets/images/mydata/declaratio-badge-500x500-300x300.png'
import whitepaper_logo from '../assets/images/mydata/whitepaper_img.png'
import koreahub_logo from '../assets/images/mydata/mydatakorea-colour-down.png'
import mydata_journal_logo from '../assets/images/mydata/mydata_journal_logo.png'


import SubscribeToMailingList from '../components/SubscribeToMailingList'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="MyData Korea" />

       

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
        <section>
         <Header />
         </section>
        <section id="koreahub" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>MyData Korea 허브 소개</h2>
                </header>
                <p>
                  MyData Korea 허브 소개 페이지는 
                  코리아 허브의 소개, 연혁, 구조 및 2020년 장기 목표를
                  설명하는 페이지입니다.
                </p>

                <ul className="actions">
                  <li>
                    <Link to="/korea-hub" className="button">
                      더 보기
                    </Link>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={koreahub_logo} alt="" />
              </span>
            </div>
          </section>
          <section id="declaration" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>MyData 선언문</h2>
                </header>
                <p>
                  새로운 개인데이터 관리 방법의 중요성이 사회에서 점점 커지고 있습니다.
                  개인이 자신의 데이터를 잘 통제하고 데이터로부터 여러 유익을
                  누려야 할 수 있는 시대가 도래하고 있습니다.
                </p>
                <p>
                  MyData 선언문은 개인데이터에 대한 인간중심적 비전과 공정하고, 
                  지속 가능하며, 번영하는 디지털 사회를 조성하기 위한 다짐을 
                  공표하는 공식 문서입니다.
                </p>

                <ul className="actions">
                  <li>
                    <a
                      href="https://mydata.org/declaration/korean/"
                      className="button"
                    >
                      MyData 선언문 읽기
                    </a>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={declaration_logo} alt="" />
              </span>
            </div>
          </section>
          <section id="whitepaper" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>MyData 백서</h2>
                </header>
                <p>
                  개인데이터의 인간중심적 접근을 위해서는 근본적인 목표와 이유 뿐만이 아니라 
                  기술적인 모델을 필요로 합니다.

                </p>
                <p>
                  MyData 백서는 근본적인 접근 방법과 기본 개념을 서술하는 문서입니다. 
                  MyData의 기본 모델, 효익, 이유, 원리, 응용방법, 데이터 생태계의 현 상태 등 개인데이터의
                  인간중심적 접근을 위해 알아야 하는 필수적인 지식에 대한 설명을 담고 있습니다.
                </p>

                <ul className="actions">
                  <li>
                    <Link to="/whitepaper" className="button">
                      MyData 백서 읽기
                    </Link>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={whitepaper_logo} alt="" />
              </span>
            </div>
          </section>
          
          <section id="resources" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>MyData 자료실</h2>
                </header>
                <p>
                  MyData 에 대한 다양한 기술적, 경영적, 정치적 블로그 글, 연구, 견해를 모아둔
                  자료실입니다.
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/resources" className="button">
                      더 보기
                    </Link>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={mydata_journal_logo} alt="" />
              </span>
            </div>
          </section>


          <section id="signup" className="main special">
            <header className="major">
              <h2>MyData 회원가입 신청</h2>
              <p>
                MyData Korea 허브 회원 신청서를 받고 있습니다.
                <br />
                관심이 있으시면 MyData 선언문에 서명 후 신청해 주시기를 바랍니다.
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <a href="https://mydata.org/declaration/" className="button">
                    선언문 서명하기
                  </a>
                </li>
                <li>
                  <a href="/forms" className="button special">
                    회원가입 신청
                  </a>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index



