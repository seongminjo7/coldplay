document.addEventListener('DOMContentLoaded', () => {
  // 1. 앨범 필터링 관련 변수
  const filterBtns = document.querySelectorAll('.sectionTopR li');
  const albumItems = document.querySelectorAll('.item');

  // 2. 네비게이션 스크롤 관련 변수
  const navLinks = document.querySelectorAll('.gnb a');

  /**
   * 앨범 필터링 함수
   */
  function filterAlbum(category) {
    albumItems.forEach(item => {
      if (item.getAttribute('data-category') === category) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  // [초기 설정] 페이지 로드 시 '정규 앨범' 먼저 표시
  filterAlbum('regular');

  /**
   * 앨범 카테고리 버튼 클릭 이벤트
   */
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // 버튼 활성화 스타일 변경
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // 선택한 카테고리에 맞는 앨범 보여주기
      const targetCategory = btn.getAttribute('data-filter');
      filterAlbum(targetCategory);
    });
  });

  /**
   * GNB 메뉴 클릭 시 부드러운 스크롤 이동
   */
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // href 속성값이 '#'으로 시작하는 경우에만 실행 (내부 링크 확인)
      const targetId = link.getAttribute('href');
      
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault(); // 기본 링크 이동 방지
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          // 해당 섹션으로 부드럽게 이동
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});