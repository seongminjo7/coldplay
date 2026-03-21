document.addEventListener('DOMContentLoaded', () => {
    // 1. 앨범 필터링 관련 변수
    const filterBtns = document.querySelectorAll('.sectionTopR li');
    const albumItems = document.querySelectorAll('.item');

    // 2. 네비게이션 스크롤 관련 변수
    const navLinks = document.querySelectorAll('.gnb a');

    const subBtn = document.querySelector('.subBtn');
    const gnb = document.querySelector('.gnb');
    // const navLinks = document.querySelectorAll('.gnb a');

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
    // 1. 햄버거 버튼 클릭 이벤트
    subBtn.addEventListener('click', () => {
        gnb.classList.toggle('active');   // 메뉴 보이기/숨기기
        subBtn.classList.toggle('open');  // 버튼 X자 만들기
    });

    // 2. 메뉴 링크 클릭 시 (부드러운 이동 + 메뉴 닫기)
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');

            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();

                // 이동하기 전에 모바일 메뉴는 닫아줍니다.
                gnb.classList.remove('active');
                subBtn.classList.remove('open');

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});