import React, { Component } from 'react';
import {PageHeader, Panel} from 'react-bootstrap';
import {Link} from 'react-router';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';
import ReactDisqusThread from 'react-disqus-thread';
import _ from 'lodash';

import _machineLearning from '../content/machine-learning';
import _webDevelopment from '../content/web-development';

import './podcasts.css';

const podcasts = {
  'machine-learning': _machineLearning,
  'web-development': _webDevelopment,
};
const fmt = 'MMM, MM/DD/YYYY';

class Recommend extends Component {
  render() {
    let {series, id} = this.props.params;
    const podcast = podcasts[series];
    return (
      <div>
        <Link to={`podcasts/${series}`}>&lt; Back</Link>
        <Panel header={<h3>Recommend a Future Episode</h3>}>
          <p>Comment (using Disqus) any future episode you'd like to see, or upvote another's recommendation if it's already in the comments. When I'm done with my game-plan, I hope to tackle recommendations in order of popularity.</p>
        </Panel>
        <ReactDisqusThread
          shortname="ocdevel"
          identifier={series + '-recommend'}
          title={`Recommend an Episode | ${podcast.title}`}
          url={`http://ocdevel.com/podcasts/${series}/recommend`}/>
      </div>
    );
  }
}

class Episode extends Component {
  renderPlayer = (podcast, episode) => {
    if (podcast.useLibsynPlayer) {
      const embedCode = `<iframe style="border: none" src="//html5-player.libsyn.com/embed/episode/id/${episode.libsynEpisode}/height/90/width/640/theme/custom/autonext/no/thumbnail/yes/autoplay/no/preload/no/no_addthis/no/direction/backward/render-playlist/no/custom-color/87A93A/" height="90" width="640" scrolling="no"  allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>`;
      return <div dangerouslySetInnerHTML={{__html: embedCode}} />;
      // Tried massaging the embed-code to React-compliant props, but still getting `Unknown prop __` - so using dangerouslySetInnerHTML instead
      // return <iframe src={`//html5-player.libsyn.com/embed/episode/id/${e.libsynEpisode}/height/90/width/640/theme/custom/autonext/no/thumbnail/no/autoplay/no/preload/no/no_addthis/no/direction/backward/render-playlist/no/custom-color/87A93A/`} style={{border: "none"}} height="90" width="640" scrolling="no" allowFullScreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
    }
    return (
      <audio controls style={{width:'100%'}}>
        <source src={episode.file.url} type={episode.file.type}/>
        Your browser does not support the audio element.
      </audio>
    );
  };

  render() {
    let {series, id} = this.props.params;
    const podcast = podcasts[series],
      episode = podcast.episodes[id-1];
    return (
      <div>
        <Link to={`podcasts/${series}`}>&lt; Back</Link>
        <Panel header={<h3>{episode.title}</h3>}>
          <span className="pull-right">{moment(episode.date).format(fmt)}</span>
          {episode.body? (
            <ReactMarkdown source={episode.body}
              renderers={{Link: props => <a href={props.href} target="_blank">{props.children}</a>}}
            />
          ): <p>{episode.teaser}</p>}
          {this.renderPlayer(podcast, episode)}
        </Panel>
        <ReactDisqusThread
          shortname="ocdevel"
          identifier={episode.guid}
          title={`${episode.title} | ${podcast.title}`}
          url={`http://ocdevel.com/podcasts/${series}/${id}`}/>
      </div>
    );
  }
}

class Episodes extends Component {
  render() {
    let {series} = this.props.params;
    return (
      <div>
        {podcasts[series].episodes.map((e,i) => (
          <Panel key={e.guid} header={<h3><Link to={`/podcasts/${series}/${i+1}`}>{e.title}</Link></h3>}>
            <span className="pull-right">{moment(e.date).format(fmt)}</span>
            <p>{e.teaser}</p>
            <Link to={`/podcasts/${series}/${i+1}`}>Read More &raquo;</Link>
          </Panel>
        ))}
      </div>
    );
  }
}

class Series extends Component {
  render() {
    let {series} = this.props.params;
    if (!_.includes(['machine-learning', 'web-development'], series))
      return window.location.href = '/podcasts/machine-learning';

    let podcast = podcasts[series];
    let buttons = {
      'web-development': (
        <div className="sub-button-container">
          <a className="zocial itunes sub-button" href="https://itunes.apple.com/us/podcast/ocdevel-web-development-podcast/id269893594?mt=2" target="_blank" rel="nofollow">iTunes</a>
        </div>
      ),
      'machine-learning': (
        <div className="sub-button-container">
          <a className="zocial itunes sub-button" href="https://itunes.apple.com/us/podcast/machine-learning-guide/id1204521130" target="_blank" rel="nofollow">iTunes</a>
          <a className="zocial android sub-button" href='https://playmusic.app.goo.gl/?ibi=com.google.PlayMusic&amp;isi=691797987&amp;ius=googleplaymusic&amp;link=https://play.google.com/music/m/I6qthwgrz7b5tclqk4ruvipibtu?t%3DMachine_Learning_Guide%26pcampaignid%3DMKT-na-all-co-pr-mu-pod-16' rel='nofollow' target="_blank">Google Play</a>
          <a className="zocial podcast sub-button" href="http://www.stitcher.com/s?fid=130679&refid=stpr" target="_blank" rel="nofollow">Stitcher</a>
        </div>
      )
    }[series];

    let extraContent = {
      'web-development': (
        <h4 className="alert alert-warning">This podcast is broadly still relevant, but vastly out-dated. Might I recommend <a href="http://starthere.fm/category/webdev" target="_blank">Start Here FM</a> instead.</h4>
      ),
      'machine-learning': (
        <div className="alert alert-success">
          <ul className="lead list-unstyled">
            <li>
              ☞ Could y'all do me a solid and fill out a <a href="http://survey.libsyn.com/machinelearningguide" target="_blank">demographic survey</a>?
            </li>
            <li>
              ☞ <Link to={`/podcasts/${series}/recommend`}>Recommend a Future Episode</Link>
            </li>
            <li>
              ☞ <a href="http://eepurl.com/cUUWfD" target="_blank">Mailing List</a> - get notified of new episodes / announcements
            </li>
          </ul>
        </div>
      )
    }[series];

    return (
      <div className="Series">
        <PageHeader>{podcast.title}</PageHeader>
        <div>
          <div className="logo-and-sub">
            <div className="logo"><img src={podcast.image} style={{height: 140, width: 140}}/></div>
            {buttons}
          </div>
          <div className="clearfix"/>
          <p>
            {extraContent}
            {podcast.body || podcast.teaser}
          </p>
        </div>
        {this.props.children}
      </div>
    );
  }
}

class App extends Component {
  render() {
    let {series} = this.props.params;
    if (!_.includes(['machine-learning', 'web-development'], series))
      return window.location.href = '/podcasts/machine-learning';

    return (
      <div>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default {App, Series, Episodes, Episode, Recommend};