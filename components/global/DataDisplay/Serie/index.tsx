import React from 'react';
import { Image } from '@components/DataDisplay/Image';
import { Typography } from '@components/DataDisplay/Typography';
import { Bookmark } from '@components/Icon/Bookmark';
import { AspectRatio } from '@components/Layout/AspectRatio';
import { Truncate } from '../Truncate';
import { Serie as ISerie } from '@globalTypes/serieServices';
import { SerieBox, ThumbnailBox, ContentBox, BookmarkBox } from './styled';

type SerieProps = {
  name: string;
  thumbnail: string;
  countEpisodes: number;
  geners: ISerie['geners'];
  isInQueue?: boolean;
};

export const Serie = ({
  name,
  thumbnail,
  geners,
  countEpisodes,
  isInQueue,
}: SerieProps) => {
  return (
    <SerieBox>
      {isInQueue && (
        <BookmarkBox>
          <Bookmark sm />
        </BookmarkBox>
      )}
      <ThumbnailBox>
        <AspectRatio ratio='2:3'>
          <Image src={thumbnail} />
        </AspectRatio>
      </ThumbnailBox>
      <ContentBox>
        <Truncate>
          <Typography as='h6' white>
            {name.toUpperCase()}
          </Typography>
        </Truncate>
        {Array.isArray(geners) && (
          <Truncate>
            <Typography>{geners.map(({ name }) => name).join(', ')}</Typography>
          </Truncate>
        )}
        <Typography>{`${countEpisodes} ${
          countEpisodes === 1 ? 'Video' : 'Videos'
        }`}</Typography>
      </ContentBox>
    </SerieBox>
  );
};
