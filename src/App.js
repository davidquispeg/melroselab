import './Portal.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
//import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/js/bootstrap.bundle';

import MelroseLabsLogo from './assets/img/MelroseLabsLogo.svg';
import MelroseLabsLogoWhiteText from './assets/img/MelroseLabsLogoWhiteText.svg';

function App() {
  return (
    <div className="App">
      <div className="container">
        <section className="my-5">
          <h1>
            <a href="https://melroselabs.com">
              <img src={MelroseLabsLogo} alt='logo' width="148" />
            </a>
            &nbsp;SMPP Client
          </h1>
          <p className="lead">
            SMPP v3.x and v5 via Web Sockets to the 
            <a href="https://melroselabs.com/services/tyr-sms-gateway" className="custom-atop">
              &nbsp;Tyr SMS Gateway
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
              </svg>
              {/* <i className="fas fa-external-link-alt" aria-hidden="true">
              </i> */}
            </a>
            &nbsp;and SMPP SMS Gateway platforms.
          </p>
          <h2 className="h4">Account</h2>
          <div className="px-3 py-3 bg-light">
            <form autoComplete="off" noValidate>
              <div className="custom-font-form row">
                <div className="col-md-3 col-6">
                  <div className="mb-3">
                    <label className="form-label">Host</label>
                    <input type="text" className="form-control" id="inputHost" value="eu-uk.mlsmpp.net" readOnly />
                    <div id="hostHelp" className="form-text">
                      IP or hostname of SMSC or SMS gateway
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-6">
                  <div className="mb-3">
                    <label className="form-label">Port</label>
                    <input type="number" className="form-control" value="2775" readOnly/>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="mb-3">
                    <label className="form-label">System ID</label>
                    <input type="text" required className="form-control"/>
                    <div id="systemIDHelp" className="form-text">
                      SMPP account system ID
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-6">
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" required className="form-control" id="inputPassword"/>
                    <div id="passwordHelp" className="form-text">
                      SMPP account password
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-6">
                  <div className="mb-3">
                    <label className="form-label">Version</label>
                    <select className="form-control" id="inputVersion" name="inputVersion">
                      <option value="0">Default (0x00)</option>
                      <option value="51">v3.3 (0x33)</option>
                      <option value="52" defaultValue>v3.4 (0x34)</option>
                      <option value="80">v5 (0x50)</option>
                    </select>
                    <div id="versionHelp" className="form-text">
                      SMPP version
                    </div>
                  </div>
                </div>
              </div>
              <button id="connect" type="button" className="btn btn-primary">Connect</button>&nbsp;
              <button id="disconnect" type="button" className="btn btn-primary" disabled>Disconnect</button>
              <div className="float-right">
                <h5 className="mb-0 text-right">Status</h5>
                <span id="statusbound" className="custom-text">Unbound</span>
              </div>
            </form>
          </div>
          <h2 className="h4 mt-3">Commands</h2>
          <div className="mt-3 px-3 py-3 bg-light">
            <div className="pb-3">
              <button className="custom-button btn btn-success btn-sm" type="button" data-toggle="collapse" data-target="#collapseSubmitSM" aria-expanded="false" aria-controls="collapseSubmitSM">
                SubmitSM
              </button>&nbsp;
              <button className="custom-button btn btn-success btn-sm" type="button" data-toggle="collapse" data-target="#collapseDataSM" aria-expanded="false" aria-controls="collapseDataSM" disabled>
                DataSM
              </button>&nbsp;
              <button className="custom-button btn btn-success btn-sm" type="button" data-toggle="collapse" data-target="#collapseCancelSM" aria-expanded="false" aria-controls="collapseCancelSM" disabled>
                CancelSM
              </button>&nbsp;
              <button className="custom-button btn btn-success btn-sm" type="button" data-toggle="collapse" data-target="#collapseQuerySM" aria-expanded="false" aria-controls="collapseQuerySM" disabled>
                QuerySM
              </button>&nbsp;
              <button className="custom-button btn btn-success btn-sm" type="button" data-toggle="collapse" data-target="#collapseEnquireLink" aria-expanded="false" aria-controls="collapseEnquireLink">
                EnriqueSM
              </button>
            </div>
            <div className="collapse" id="collapseSubmitSM">
              <div className="mt-1 card card-body">
                <div className="row pb-3">
                  <div className="col-4 mb-0">
                    <label className="mb-0">
                      <b className="custom-b">Source Address</b>
                    </label>
                    <div className="input-group mb-1" id="sourceGroup">
                      <div className="col-auto px-0 py-0 my-0">
                        <div className="form-group mb-0">
                          <select className="custom-select form-control form-control-sm" id="sourceTON" name="sourceTON">
                            <option value="0">Auto</option>
                            <option value="1" defaultValue>Intl</option>
                            <option value="2">Nat</option>
                            <option value="5">Alpha</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-auto px-0 py-0 my-0">
                        <div className="form-group mb-0">
                          <select className="custom-select form-control form-control-sm" id="sourceNPI" name="sourceNPI">
                            <option value="0">Auto</option>
                            <option value="1" defaultValue>E164</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-auto px-0 py-0 my-0">
                        <div className="form-group mb-0">
                          <input type="text" className="form-control form-control-sm" id="sourceAddress" name="sourceAddress" required placeholder="source" maxLength="20"/>
                          <div className="invalid-feedback">Please provide an address</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 mb-0">
                    <label className="mb-0">
                      <b className="custom-b">Destination Address</b>
                    </label>
                    <div className="input-group mb-1" id="destinationGroup">
                      <div className="col-auto px-0 py-0 my-0">
                        <div className="form-group mb-0">
                          <select className="custom-select form-control form-control-sm" id="destinationTON" name="destinationTON">
                            <option value="0">Auto</option>
                            <option value="1" defaultValue>Intl</option>
                            <option value="2">Nat</option>
                            <option value="5">Alpha</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-auto px-0 py-0 my-0">
                        <div className="form-group mb-0">
                          <select className="custom-select form-control form-control-sm" id="destinationNPI" name="destinationNPI">
                            <option value="0">Auto</option>
                            <option value="1" defaultValue>E164</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-auto px-0 py-0 my-0">
                        <div className="form-group mb-0">
                          <input type="text" className="form-control form-control-sm" id="destinationAddress" name="destinationAddress" required placeholder="destination" maxLength="20"/>
                          <div className="invalid-feedback">Please provide an address</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 mb-0">
                    <label className="mb-0">
                      <b className="custom-b">Registered delivery</b>
                    </label>
                    <select className="custom-select form-control form-control-sm" id="registeredDelivery" name="registeredDelivery">
                      <option value="0" defaultValue>0: No MC Delivery Receipt</option>
                      <option value="1">1: MC Delivery Receipt</option>
                      <option value="2">2: MC Delivery Receipt on fail</option>
                      <option value="3">3: MC Delivery Receipt on success</option>
                      <option value="16">16: Intermediate notification</option>
                      <option value="17">17: Intermediate + MC Delivery Receipt</option>
                      <option value="18">18: Intermediate + MC Delivery Receipt on fail</option>
                      <option value="19">19: Intermediate + MC Delivery Receipt on success</option>
                    </select>
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col-3 mb-0">
                    <label className="mb-0">
                      <b className="custom-b">ESM Class</b>
                    </label>
                    <select className="custom-select form-control form-control-sm" id="esmClass" readOnly disabled>
                      <option value="0" defaultValue>0: Default mode</option>
                    </select>
                  </div>
                  <div className="col-3 mb-0">
                    <label className="mb-0">
                      <b className="custom-b">Protocol ID</b>
                    </label>
                    <input type="number" className="form-control form-control-sm" id="protocolID" name="protocolID" required value="0" min="0" max="255" readOnly disabled/>
                    <div className="invalid-feedback">Please provide an address</div>
                  </div>
                  <div className="col-3 mb-0">
                    <label className="mb-0">
                      <b className="custom-b">Priority flag</b>
                    </label>
                    <select className="custom-select form-control form-control-sm" id="priorityFlag" readOnly disabled>
                      <option value="0" defaultValue>0: Non-priority</option>
                    </select>
                  </div>
                  <div className="col-3 mb-0">
                    <label className="mb-0">
                      <b className="custom-b">Data coding</b>
                    </label>
                    <select className="custom-select form-control form-control-sm" id="dataCoding" name="dataCoding" readOnly disabled>
                      <option value="0" defaultValue>0: MC Specific (default)</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="mb-1">
                    <b className="custom-b">Message</b>
                  </label>
                  <textarea className="form-control from-control-sm" id="smppMessage" name="smppMessage" rows="2">
                  </textarea>
                </div>
                <button id="submitsm" type="button" className="btn btn-primary" disabled>Submit</button>
              </div>
            </div>
            <div className="collapse" id="collapseEnquireLink">
              <div className="mt-1 card card-body">
                <button id="enquirelink" type="button" className="btn btn-primary">Enquire Link</button>
              </div>
            </div>
          </div>
          <h2 className="h4 mt-3">Log</h2>
          <div className="row mb-1">
            <div className="col-12">
              <div className="custom-log bg-light px-3 pt-1 pb-0 mt-2 mb-1">
                <div id="message-area" className="custom-message-area">
                  <span className="badge badge-dark">00:54:30</span>
                  &nbsp;&nbsp;Disconnected
                  <br />
                  <div className="row border-bottom">
                    <div className="col-2">
                      <span className="badge badge-secondary">00:54:10</span>
                      &nbsp;&nbsp;
                      <span className="badge badge-info text-dark">0001</span>
                      &nbsp;
                    </div>
                    <div className="col-10 pb-1">
                      <span className="custom-badge badge bg-primary">bind_transceiver_resp</span>&nbsp;
                      <span className="badge badge-danger">ERROR: RBINDFAIL (0x00d)</span>
                      &nbsp;&nbsp;
                    </div>
                  </div>
                  <div className="row border-bottom">
                    <div className="col-2">
                      <span className="badge badge-secondary">00:54:09</span>
                      &nbsp;&nbsp;
                      <span className="badge badge-info text-dark">0001</span>
                      &nbsp;
                    </div>
                    <div className="col-10 pb-1">
                      <span className="custom-badge badge bg-primary">bind_transceiver</span>&nbsp;
                      system ID:
                      <code></code>
                      ;system type:
                      <code></code>
                      ;system range:
                      <code></code>
                      ;version:
                      <code>0x34</code>
                      &nbsp;&nbsp;
                    </div>
                  </div>
                  <span className="badge badge-secondary">00:54:09</span>
                  &nbsp;&nbsp; Connected
                  <br />
                  <span className="badge badge-dark">00:54:08</span>
                  &nbsp;&nbsp; Connecting
                </div>
              </div>
              <div className="text-end">
                <button id="logcompact" type="button" className="btn btn-secondary btn-sm">Compact</button>&nbsp;
                <button id="logexpand" type="button" className="btn btn-secondary btn-sm">Expand</button>&nbsp;
                <button id="logclear" type="button" className="btn btn-secondary btn-sm">Clear</button>
              </div>
            </div>
          </div>
          
        </section>
      </div>
      <footer id="footer" className="footer">
        <div className="footer-top">
          <div className="container container-lg">
            <div className="row cols-xs-space cols-sm-space cols-md-space">
              <div className="col-lg-3 col-md-6 col-6">
                <h4 className="heading heading-xs strong-600 text-uppercase mb-3">SMPP Related Services</h4>
                <ul className="footer-links mllist">
                  <li>
                    <a className="custom-a" href="https://melroselabs.com/services/smsc-simulator/">SMSC Simulator</a>
                  </li>
                  <li>
                    <a className="custom-a" href="https://melroselabs.com/services/smpp-sms-gateway/">SMPP SMS Gateway</a>
                  </li>
                  <li>
                    <a className="custom-a" href="https://melroselabs.com/services/tyr-sms-gateway/">Tyr SMS Gateway</a>
                  </li>
                  <li>
                    <a className="custom-a" href="https://melroselabs.com/services/smpp-testing/">SMPP SMS Gateway</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 col-6">
                <h4 className="heading heading-xs strong-600 text-uppercase mb-3">Company</h4>
                <ul className="footer-links mllist">
                  <li>
                    <a className="custom-a" href="https://melroselabs.com/developers/">Developers</a>
                  </li>
                  <li>
                    <a className="custom-a" href="https://melroselabs.com/support/">Support</a>
                  </li>
                  <li>
                    <a className="custom-a" href="https://melroselabs.com/contact/">Contact</a>
                  </li>
                  <li>
                    <a className="custom-a" href="https://melroselabs.com/about/">About</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-6 col-6">
                <div className="copyright">
                  <p className="pb-0 mb-0">
                    &copy; 2021 Melrose Labs Ltd.
                    <br />
                    Todos los derechos reservados.
                  </p>
                </div>
                <br />
                <ul className="footer-links">
                  <li>
                    <a className="custom-a" href="https://melroselabs.com/privacypolicy.php">Privacy policy</a>
                  </li>
                  <li>
                    <a className="custom-a" href="https://melroselabs.com/legal.php">Legal</a>
                  </li>
                  <li>
                    .
                  </li>
                </ul>
              </div>
              <div className="col-1">
              &nbsp;
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <a href="https://melroselabs.com">
                  <img src={MelroseLabsLogoWhiteText} alt='logo2' className="pb-2" width="200" />
                </a>
                <p className="heading-4">Invención, desarrollo y explotacion de servicios de comunicación.</p>
                <p>Servicios innovadores de comunicación en la nube que hacen que las empresas tengan más éxito</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
