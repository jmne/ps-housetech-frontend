import styles from "@/components/Calendar/Feed/Feed.module.scss";
import { ErrorBoundary } from "@/components/UI/Card";

import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography, { TypographyProps } from "@mui/material/Typography";
import ProgressBar from "@mui/material/LinearProgress";

import QRCode from "react-qr-code";

import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { parseDate } from "./util";

const mediumRssFeed = "https://www.tagesschau.de/api2u/homepage";

function ErrorTypography({ children, ...props }: TypographyProps) {
  return (
    <ErrorBoundary>
      <Typography {...props}>{children}</Typography>
    </ErrorBoundary>
  );
}

function Feed() {
  const MAX_ARTICLES = 10;

  const [articles, setArticles] = useState<unknown | undefined>();

  const [progress, setProgress] = useState(0);

  const [reset, setReset] = useState(false);

  useEffect(() => {
    const loadArticles = async () => {
      fetch(mediumRssFeed, { headers: { Accept: "application/json" } })
        .then((res) => res.json())
        .then((data) => data.news.filter((item: any) => item.title.length > 0))
        .then((newArticles) => newArticles.slice(0, MAX_ARTICLES))
        .then((articles: unknown) => setArticles(articles))
        .catch((error) => console.log(error));
    };

    loadArticles();
  }, [MAX_ARTICLES]);

  return (
    <div className={styles.body}>
      <Container maxWidth="lg" className={styles.cardContainer}>
        <Card className={styles.rootTitle}>
          <h1>News</h1>
        </Card>
        <ErrorBoundary>
          <Swiper
            modules={[Autoplay, Pagination]}
            pagination={{
              clickable: false
            }}
            loop={true}
            autoplay={{
              delay: 30000,
              disableOnInteraction: false
            }}
            onSlideChange={() => {
              setReset(true);
              setProgress(0);
              setInterval(() => {
                setReset(false);
                setProgress(100);
              }, 200);
            }}
          >
            {articles // @ts-ignore
              ? articles.map((item: any) => (
                  <SwiperSlide key={item?.externalId}>
                    <Card className={styles.rootNews}>
                      <CardContent
                        sx={{
                          margin: 0,
                          padding: 0,
                          "&:last-child": {
                            paddingBottom: 0
                          }
                        }}
                      >
                        <CardMedia
                          className={styles.media}
                          image={
                            item?.teaserImage?.imageVariants["1x1-840"] !== undefined
                              ? item?.teaserImage?.imageVariants["1x1-840"]
                              : "/news.svg"
                          }
                          title={item?.teaserImage?.alttext}
                        />
                        <div className={styles.textContainer}>
                          <CardContent className={styles.card}>
                            <Typography
                              gutterBottom
                              textAlign={"start"}
                              color={"rgba(0, 0, 0, 0.6)"}
                            >
                              {item?.topline}
                            </Typography>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                              textAlign={"start"}
                            >
                              {item?.title}
                            </Typography>

                            <ErrorTypography
                              gutterBottom
                              variant={"body2"}
                              component={"p"}
                              className={styles.text}
                            >
                              {Array.isArray(item?.content) &&
                                item?.content.at(0).value.replace(/<\/?[^>]+(>|$)/g, "")}
                            </ErrorTypography>

                            <div className={styles.modalFooter}>
                              <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                                className={styles.date}
                              >
                                {parseDate(item?.date)}
                              </Typography>
                              <ErrorTypography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                                className={styles.tag}
                              >
                                {Array.isArray(item?.tags) && item?.tags[0]?.tag},{" "}
                                {Array.isArray(item?.tags) && item?.tags[1]?.tag}
                              </ErrorTypography>
                            </div>
                          </CardContent>
                          <ProgressBar
                            variant="determinate"
                            value={progress}
                            defaultValue={0}
                            color={"primary"}
                            className={styles.progressBar}
                            sx={{
                              "& .MuiLinearProgress-bar": {
                                transition: reset ? "none" : "transform 30s linear"
                              }
                            }}
                          />
                        </div>
                      </CardContent>
                    </Card>
                    <Card className={styles.rootQr}>
                      <div className={styles.qrContainer}>
                        <QRCode
                          bgColor="#fafafa"
                          fgColor="#15171b"
                          value={item?.shareURL}
                          className={styles.qr}
                        />
                      </div>
                    </Card>
                  </SwiperSlide>
                ))
              : "Keine Artikel."}
          </Swiper>
        </ErrorBoundary>
      </Container>
    </div>
  );
}

export default Feed;
