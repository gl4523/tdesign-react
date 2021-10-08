import React from 'react';
import { Button, PopConfirm } from '@tencent/tdesign-react';

export default function InheritExample() {
  return (
    <>
      <PopConfirm
        theme={'default'}
        content={'直接使用 placement 进行设置'}
        placement={'bottom'}
      >
        <Button>浮层出现在下方</Button>
      </PopConfirm>
      <PopConfirm
        theme={'default'}
        content="透传属性到 Popup 组件进行设置"
        popupProps={{
          placement: 'right'
        }}
        confirmBtn={<Button theme={'primary'} size={'small'}>确定提交</Button>}
        cancelBtn={<Button theme={'default'} size={'small'} variant={'outline'}>我再想想</Button>}
      >
        <Button theme="primary">浮层出现在右侧</Button>
      </PopConfirm>
    </>
  );
}
