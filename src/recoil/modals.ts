import { atom } from 'recoil';

const reviewmodalState = atom<boolean>({
  key: 'reviewmodal',
  default: false,
});

const tagitem = atom<string[]>({
  key: 'tagitem',
  default: [],
});
const starRate = atom<number>({
  key: 'starRate',
  default: 0,
});

const textRate = atom<string>({
  key: 'textRate',
  default: '',
});

const productRegistModalState = atom<boolean>({
  key: 'productRegistModalState',
  default: false,
});

const eventManageModalState = atom<boolean>({
  key: 'eventManageModalState',
  default: false,
});
const eventName = atom<string>({
  key: 'evnetName',
  default: '',
});
const eventDate = atom<string>({
  key: 'eventDate',
  default: '',
});
const eventLink = atom<string[]>({
  key: 'eventLink',
  default: [],
});
const eventPic = atom<File[]>({
  key: 'eventPic',
  default: [],
});

const eventExplane = atom<string>({
  key: 'eventExplane',
  default: '',
});

const shareModalState = atom({
  key: 'shareModal',
  default: false,
});

const detailModalState = atom({
  key: 'detailModal',
  default: false,
});
const eventDetailModal = atom<boolean>({
  key: 'eventDetailModal',
  default: false,
});

const popUpModalState = atom<boolean>({
  key: 'popUpModal',
  default: false,
});

export {
  reviewmodalState,
  productRegistModalState,
  eventManageModalState,
  tagitem,
  starRate,
  textRate,
  eventName,
  eventDate,
  eventLink,
  eventExplane,
  eventPic,
  shareModalState,
  detailModalState,
  eventDetailModal,
  popUpModalState,
};
