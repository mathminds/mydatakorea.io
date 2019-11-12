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

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
        <section></section>
          <section id="declaration" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>MyData 선언문</h2>
                </header>
                <p>
                  사회에서 개인데이터에 대한 중요성이 계속 커짐에 따라 개인이
                  자신의 개인데이터를 잘 알고 통제할 뿐만 아니라 자신에 대한
                  인사이트와 여러 유익을 얻을 수 있도록 하는 것이 더 시급해지고
                  있습니다.
                </p>
                <p>
                  MyData 선언문은 개인데이터에 대한 인간중심적 비전과 공정하고,
                  지속 가능하며, 번영하는 디지털 사회를 조성하기 위한 우리의
                  다짐을 선언합니다.
                </p>

                <ul className="actions">
                  <li>
                    <a
                      href="https://mydata.org/declaration/korean/"
                      className="button"
                    >
                      선언문 읽어보기
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
                  사회에서 개인데이터에 대한 중요성이 계속 커짐에 따라 개인이
                  자신의 개인데이터를 잘 알고 통제할 뿐만 아니라 자신에 대한
                  인사이트와 여러 유익을 얻을 수 있도록 하는 것이 더 시급해지고
                  있습니다.
                </p>
                <p>
                  MyData 선언문은 개인데이터에 대한 인간중심적 비전과 공정하고,
                  지속 가능하며, 번영하는 디지털 사회를 조성하기 위한 우리의
                  다짐을 선언합니다.
                </p>

                <ul className="actions">
                  <li>
                    <Link to="/whitepaper" className="button">
                      MyData 백서 읽어보기
                    </Link>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={whitepaper_logo} alt="" />
              </span>
            </div>
          </section>
          <section id="koreahub" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>MyData Korea 허브</h2>
                </header>
                <p>
                  사회에서 개인데이터에 대한 중요성이 계속 커짐에 따라 개인이
                  자신의 개인데이터를 잘 알고 통제할 뿐만 아니라 자신에 대한
                  인사이트와 여러 유익을 얻을 수 있도록 하는 것이 더 시급해지고
                  있습니다.
                </p>
                <p>
                  MyData 선언문은 개인데이터에 대한 인간중심적 비전과 공정하고,
                  지속 가능하며, 번영하는 디지털 사회를 조성하기 위한 우리의
                  다짐을 선언합니다.
                </p>

                <ul className="actions">
                  <li>
                    <Link to="/korea-hub" className="button">
                      더 알아보기
                    </Link>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={koreahub_logo} alt="" />
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
                  사회에서 개인데이터에 대한 중요성이 계속 커짐에 따라 개인이
                  자신의 개인데이터를 잘 알고 통제할 뿐만 아니라 자신에 대한
                  인사이트와 여러 유익을 얻을 수 있도록 하는 것이 더 시급해지고
                  있습니다.
                </p>
                <p>
                  MyData 선언문은 개인데이터에 대한 인간중심적 비전과 공정하고,
                  지속 가능하며, 번영하는 디지털 사회를 조성하기 위한 우리의
                  다짐을 선언합니다.
                </p>

                <ul className="actions">
                  <li>
                    <Link to="/resources" className="button">
                      자료보기
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
                MyData Korea 허브는 현재 창립회원을 모집하고 있습니다.
                <br />
                관심이 있으신 분께서는 MyData 선언문에 서명한 후 연락바랍니다.
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button special">
                    가입신청
                  </Link>
                </li>
                <li>
                  <Link to="/korea-hub" className="button">
                    더 알아보기
                  </Link>
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
