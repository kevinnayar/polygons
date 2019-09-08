import * as React from 'react';
import ReactDOM from 'react-dom';

import { Wrapper } from './components/Wrapper';
import { Polygon } from './components/Polygon';
import { Marker } from './components/Marker';
import { Text } from './components/Text';
import { MetaData } from './components/MetaData';
import { Nav } from './components/Nav';
import { Photos } from './components/Photos';
import { Modal } from './components/Modal';

import { TypePageData, TypeTrianglePoints, TypeLinePoints } from './types/baseTypes';
import {
  getRandomColorWithSpecificRanges,
  getRandomColorWithSpecificAlpha,
} from './utils/baseUtils';

import { data } from './data/data';
import './assets/styles/index.scss';

type TypeAppState = {
  page: number;
  fade: boolean;
  modalVisible: boolean;
  modalImgSrc: null|string;
  modalImgIsNarrow: boolean;
};

class App extends React.Component<{}, TypeAppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      page: 0,
      fade: true,
      modalVisible: false,
      modalImgSrc: null,
      modalImgIsNarrow: false,
    };
  }

  WIDTH: number = 1200;
  HEIGHT: number = 600;
  NUM_PAGES: number = 5;
  STROKE_WIDTH: number = 0.75;
  RADIUS: number = 3;
  NUM_IMAGES: number = 6;
  TIMEOUT_ID: any = 0;
  INIT_TIMEOUT_TIME: number = 0;
  TIMEOUT_TIME: number = 800;

  handleNavClick(page: number, max: number, forward: boolean) {
    if ((page === 1 && !forward) || (page === max && forward)) {
      this.setState({
        page: 1,
        fade: false,
      });
      this.TIMEOUT_ID = setTimeout(() => {
        this.setState({
          fade: true,
        });
      }, this.TIMEOUT_TIME);
    } else {
      this.setState({
        page: forward ? page + 1 : page - 1,
        fade: false,
      });
      this.TIMEOUT_ID = setTimeout(() => {
        this.setState({
          fade: true,
        });
      }, this.TIMEOUT_TIME);
    }
  }

  handleImageClick(imgSrc: string, isNarrow: boolean) {
    this.setState({
      modalVisible: true,
      modalImgSrc: imgSrc,
      modalImgIsNarrow: isNarrow,
    });
  }

  handleModalClose = () => {
    this.setState({
      modalVisible: false,
    });
  }


  handleKeyDown = (event: KeyboardEvent) => {
    // right
    if (event.keyCode === 39) {
      this.handleNavClick(this.state.page, this.NUM_PAGES, true);
    }
    // left
    if (event.keyCode === 37) {
      this.handleNavClick(this.state.page, this.NUM_PAGES, false);
    }
    // esc
    if (event.keyCode === 27) {
      this.handleModalClose();
    }
  }

  componentDidMount() {
    if (this.state.page === 0) {
      this.TIMEOUT_ID = setTimeout(() => {
        this.setState({
          page: 1,
        });
      }, this.INIT_TIMEOUT_TIME);
    }
    document.addEventListener('keydown', this.handleKeyDown, false);
  }

  componentWillUnmount() {
    clearTimeout(this.TIMEOUT_ID);
    document.removeEventListener('keydown', this.handleKeyDown, false);
  }

  render() {
    const pageData: void | TypePageData = data[this.state.page];

    return (
      <Wrapper
        className={`app page-${this.state.page.toString()} fade-${this.state.fade.toString()}`}
      >
        {pageData && (
          <Wrapper className="content">
            <Wrapper className="polygons" height={this.HEIGHT}>
              {pageData.points.map(
                (points: TypeTrianglePoints, index: number) => {
                  const fillColor: string = getRandomColorWithSpecificAlpha(
                    getRandomColorWithSpecificRanges(50, 60, 75, 85, 150, 180),
                    0.75,
                  );
                  return (
                    <Polygon
                      key={`polygon.${index}`}
                      page={this.state.page}
                      points={points}
                      width={this.WIDTH}
                      height={this.HEIGHT}
                      shapeFill={fillColor}
                      shapeStrokeColor={pageData.strokeColor}
                      shapeStrokeWidth={this.STROKE_WIDTH}
                      circleRadius={this.RADIUS}
                      circleFill={pageData.strokeColor}
                    />
                  );
                },
              )}
              {pageData.markers.points.map((points: TypeLinePoints, index: number) => {
                const label: void | string = pageData.markers.labels[index];
                return (
                  <Marker
                    key={`marker.${index}`}
                    point={points}
                    label={label}
                    width={this.WIDTH}
                    height={this.HEIGHT}
                    shapeStrokeColor={pageData.strokeColor}
                    shapeStrokeWidth={this.STROKE_WIDTH}
                  />
                );
              })}
              <Text type="h1" className="title">
                <span className="title-number">
                  {this.state.page === 0 ? '01.' : `0${this.state.page.toString()}.`}
                </span>
                <span className="title-text">{pageData.title}</span>
              </Text>
              <MetaData metaData={pageData.metaData} />
              <Nav
                page={this.state.page}
                max={this.NUM_PAGES}
                onNavClick={(forward: boolean) =>
                  this.handleNavClick(this.state.page, this.NUM_PAGES, forward)
                }
              />
            </Wrapper>
            <Photos
              folder={pageData.id}
              max={this.NUM_IMAGES}
              onClick={(imgSrc: string, isNarrow: boolean) => this.handleImageClick(imgSrc, isNarrow)}
            />
          </Wrapper>
        )}
        <Modal
          visible={this.state.modalVisible}
          imgSrc={this.state.modalImgSrc}
          isNarrow={this.state.modalImgIsNarrow}
          onClose={this.handleModalClose}
        />
      </Wrapper>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
