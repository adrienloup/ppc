import { useState } from 'react';
import { createPortal } from 'react-dom';
import type { ChildrenType } from '@/src/shared/type/Children.ts';
import type { NoticeType } from '@/src/shared/ui/notice/Notice.ts';
import { Notice } from '@/src/shared/ui/notice/Notice.tsx';
import { NoticeDispatchContext } from '@/src/shared/ui/notice/NoticeContext.ts';
import { Notices } from '@/src/shared/ui/notices/Notices.tsx';

export const NoticeProvider = ({ children }: { children: ChildrenType }) => {
  const [notices, setNotices] = useState<NoticeType[]>([]);

  const add = (notice: NoticeType) => {
    const id = Math.random().toString(36).slice(2, 9);
    setNotices((prev) => [{ ...notice, id }, ...prev]);
  };

  const remove = (id: string) => {
    setNotices((prev) => prev.filter((notice) => notice.id !== id));
  };

  return (
    <NoticeDispatchContext.Provider value={add}>
      {children}
      {notices.length
        ? createPortal(
            <Notices>
              {notices.map((notice: NoticeType) => (
                <Notice
                  key={notice.id}
                  {...notice}
                  remove={() => remove(notice.id!)}
                />
              ))}
            </Notices>,
            document.getElementById('_app_ppc03_1')!
          )
        : null}
    </NoticeDispatchContext.Provider>
  );
};
