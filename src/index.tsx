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
  modalImgSrc: null | string;
  modalImgIsNarrow: boolean;
  clientWidth: number;
  width: number;
  height: number;
};

class App extends React.Component<{}, TypeAppState> {
  constructor(props: {}) {
    super(props);
    const clientWidth = document.body.clientWidth;
    const width = clientWidth * (1 - this.BUFFER);
    const height = width / 2;

    this.state = {
      page: 0,
      fade: true,
      modalVisible: false,
      modalImgSrc: null,
      modalImgIsNarrow: false,
      clientWidth,
      width,
      height,
    };
  }

  BUFFER: number = 0.381967;
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

  handleWindowResize = () => {
    const clientWidth = document.body.clientWidth;
    const width = clientWidth * (1 - this.BUFFER);
    const height = width / 2;
    this.setState({
      clientWidth,
      width,
      height,
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
    window.addEventListener('resize', this.handleWindowResize);
  }

  componentWillUnmount() {
    clearTimeout(this.TIMEOUT_ID);
    document.removeEventListener('keydown', this.handleKeyDown, false);
    window.removeEventListener('resize', this.handleWindowResize);
  }

  render() {
    // if (this.state.clientWidth <= 500) return null;

    const pageData: void | TypePageData = data[this.state.page];
    const contentHeight = this.state.height * 0.96;

    return (
      <Wrapper
        className={`app page-${this.state.page.toString()} fade-${this.state.fade.toString()}`}
      >
        {pageData && (
          <Wrapper className="content">
            <Wrapper className="polygons" height={this.state.height}>
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
                      width={this.state.width}
                      height={contentHeight}
                      shapeFill={fillColor}
                      shapeStrokeColor={pageData.strokeColor}
                      shapeStrokeWidth={this.STROKE_WIDTH}
                      circleRadius={this.RADIUS}
                      circleFill={pageData.strokeColor}
                    />
                  );
                },
              )}
              {this.state.clientWidth > 768 &&
                pageData.markers.points.map(
                  (points: TypeLinePoints, index: number) => {
                    const label: void | string = pageData.markers.labels[index];
                    return (
                      <Marker
                        key={`marker.${index}`}
                        point={points}
                        label={label}
                        width={this.state.width}
                        height={contentHeight}
                        shapeStrokeColor={pageData.strokeColor}
                        shapeStrokeWidth={this.STROKE_WIDTH}
                      />
                    );
                  },
                )}
              <Text type="h1" className="title">
                <span className="title-number">
                  {this.state.page === 0
                    ? '01.'
                    : `0${this.state.page.toString()}.`}
                </span>
                <span className="title-text">{pageData.title}</span>
              </Text>
              {this.state.clientWidth > 768 && (
                <MetaData metaData={pageData.metaData} />
              )}
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
              width={(this.state.width * 100) / ((1 - this.BUFFER) * 100)}
              onClick={(imgSrc: string, isNarrow: boolean) =>
                this.handleImageClick(imgSrc, isNarrow)
              }
            />
          </Wrapper>
        )}
        <Modal
          visible={this.state.modalVisible}
          imgSrc={this.state.modalImgSrc}
          isNarrow={this.state.modalImgIsNarrow}
          width={this.state.width}
          onClose={this.handleModalClose}
        />
      </Wrapper>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('polygons'));
