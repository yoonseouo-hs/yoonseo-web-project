// 패션 아카이브 데이터
const fashionArchive = {
  feminine: {
    name: 'Feminine',
    description: '곡선적인 실루엣과 부드러운 디테일 중심의 스타일',
    images: ['라벤더 드레스', '플로럴 프린트', '레이스 디테일', '파스텔 색상', '플리츠 스커트'],
    details: ['부드러운 재질감', '곡선을 살린 핏', '로맨틱한 디테일', '여성스러운 색감', '우아한 액세서리'],
    recommendations: ['화이트 레이스 블라우스', '핑크 플로우 스커트', '펄 목걸이', '스트랩 하이힐', '미니 클러치백']
  },
  romantic: {
    name: 'Romantic',
    description: '낭만적이고 몽환적인 분위기의 스타일',
    images: ['빈티지 레이스', '플로우 드레스', '로맨틱 프린트', '샤이니 원단', '우아한 드레이프'],
    details: ['로맨틱한 디테일', '부드러운 색감', '플로우 실루엣', '레이스 앙상블', '비에로 가운'],
    recommendations: ['보르도 벨벳 드레스', '플로랄 프린트 블라우스', '빈티지 브로치', '실크 스카프', '무스탕 슈즈']
  },
  classic: {
    name: 'Classic',
    description: '전통적인 비례와 안정적인 실루엣의 스타일',
    images: ['화이트 셔츠', '트렌치 코트', '스트라이프', '검은색 니트', '스킨십팬츠'],
    details: ['타임리스한 디자인', '중성 색감', '깔끔한 실루엣', '고급스러운 소재', '미니멀 액세서리'],
    recommendations: ['화이트 옥스포드 셔츠', '네이비 블레이저', '클래식 청바지', '검은색 로퍼', '가죽 핸드백']
  },
  minimal: {
    name: 'Minimal',
    description: '형태와 색을 최소화한 단순한 스타일',
    images: ['단색 원피스', '깔끔한 실루엣', '중립 색감', '미니멀 라인', '심플 베이직'],
    details: ['디테일 최소화', '단순 색감', '클린 라인', '기본 실루엣', '엘리먼트 강조'],
    recommendations: ['검은색 터틀넥', '베이지 스트레이트팬츠', '화이트 스니커즈', '미니 크로스백', '심플 팔찌']
  },
  street: {
    name: 'Street',
    description: '캐주얼 요소와 트렌드를 반영한 스트리트 기반 스타일',
    images: ['오버사이즈 후디', '청바지', '스니커즈', '캡 모자', '그래픽 티셔츠'],
    details: ['캐주얼한 핏', '믹스 매치', '트렌디 소품', '대담한 색감', '편안한 실루엣'],
    recommendations: ['오버사이즈 후디', '블랙 스키니진', '화이트 스니커즈', '볼캡', '크로스백']
  },
  casual: {
    name: 'Casual',
    description: '편하고 자연스러운 일상 스타일',
    images: ['티셔츠', '청바지', '스니커즈', '캐주얼 셔츠', '쇼츠'],
    details: ['편한 핏', '일상적인 소재', '자연스러운 색감', '투박한 실루엣', '실용적인 디자인'],
    recommendations: ['코튼 티셔츠', '라이트 데님진', '캔버스 스니커즈', '카키 팬츠', '토트백']
  },
  sporty: {
    name: 'Sporty',
    description: '활동적이고 에너지 넘치는 스포츠 스타일',
    images: ['스포츠 브라', '레깅스', '러닝화', '트레이닝 자켓', '조거팬츠'],
    details: ['기능성 소재', '활동적 핏', '스포츠 로고', '밝은 색감', '편안한 실루엣'],
    recommendations: ['스포츠 탑', '블랙 레깅스', '러닝화', '스포츠 자켓', '스포츠 백']
  },
  vintage: {
    name: 'Vintage',
    description: '과거의 매력을 담은 복고풍 스타일',
    images: ['클래식 데님', '빈티지 재킷', '레트로 프린트', '올드 스쿨 스니커즈', '빈티지 가죽'],
    details: ['과거 시대 감성', '복고 디자인', '빈티지 색감', '오래된 느낌', '클래식 실루엣'],
    recommendations: ['빈티지 데님 재킷', '레트로 프린트 티셔츠', '올드스쿨 스니커즈', '가죽 벨트', '빈티지 시계']
  },
  bohemian: {
    name: 'Bohemian',
    description: '자유로운 실루엣과 내추럴 소재의 스타일',
    images: ['맥시 스커트', '프린지 디테일', '에스닉 패턴', '플로우 원피스', '보헤미안 프린트'],
    details: ['자유로운 실루엣', '에스닉 패턴', '플로우 소재', '자연스러운 색감', '예술적 디테일'],
    recommendations: ['에스닉 프린트 드레스', '프린지 백', '맥시 스커트', '샌달', '헐렁한 블라우스']
  },
  y2k: {
    name: 'Y2K',
    description: '2000년대 초의 팝 문화 감성 스타일',
    images: ['저라이즈 진', '베이비 티셔츠', '벨리 톱', '스팽글 악세서리', '핑크 팔레트'],
    details: ['저라이즈 진', '타이트한 핏', '반짝이는 디테일', '팝 색감', 'Y2K 액세서리'],
    recommendations: ['저라이즈 진', '베이비 핑크 탑', '벨리 체인', '스팽글 백', '플랫폼 스니커즈']
  },
};

// 스타일 카테고리 배열
const styleCategories = [
  'Feminine',
  'Romantic',
  'Classic',
  'Minimal',
  'Street',
  'Casual',
  'Sporty',
  'Vintage',
  'Bohemian',
  'Y2K'
];

// SPA 메인 앱 객체
const app = {
  currentPage: 'home',
  currentStyle: null,
  allStyles: Object.keys(fashionArchive),
  
  // 초기화
  init() {
    this.setupMenuStyles();
    this.setupSearchListener();
    this.navigate('home');
  },

  // 최근 본 스타일 저장 (최대 3개)
  saveRecentStyle(style) {
    let recentStyles = JSON.parse(localStorage.getItem('recentStyles')) || [];
    
    // 이미 존재하면 제거
    recentStyles = recentStyles.filter(s => s !== style);
    
    // 맨 앞에 추가
    recentStyles.unshift(style);
    
    // 최대 3개까지만 유지
    if (recentStyles.length > 3) {
      recentStyles = recentStyles.slice(0, 3);
    }
    
    localStorage.setItem('recentStyles', JSON.stringify(recentStyles));
  },

  // 최근 본 스타일 불러오기
  getRecentStyles() {
    return JSON.parse(localStorage.getItem('recentStyles')) || [];
  },

  // 페이지 네비게이션
  navigate(page, style = null) {
    // 모든 페이지 숨기기
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    this.currentPage = page;
    
    switch(page) {
      case 'home':
        document.getElementById('home-page').classList.remove('hidden');
        this.renderHome();
        break;
      case 'category':
        document.getElementById('category-page').classList.remove('hidden');
        this.renderCategory();
        break;
      case 'collection':
        // style이 없으면 최근 본 스타일 사용
        if (!style) {
          const recentStyles = this.getRecentStyles();
          style = recentStyles.length > 0 ? recentStyles[0] : this.allStyles[0];
        }
        this.currentStyle = style;
        document.getElementById('collection-page').classList.remove('hidden');
        this.renderCollection();
        break;
    }
    
    // 메뉴 닫기
    const menu = document.getElementById('menuDropdown');
    menu.classList.remove('show');
    
    window.scrollTo(0, 0);
  },

  // 홈 페이지 렌더링
  renderHome() {
    const container = document.getElementById('recommendedCollections');
    container.innerHTML = '';
    
    // 추천 스타일: Feminine, Casual, Street
    const recommended = ['feminine', 'casual', 'street'];
    recommended.forEach(styleKey => {
      const style = fashionArchive[styleKey];
      const card = document.createElement('div');
      card.className = 'collection-card';
      
      let backgroundStyle = 'background: #d0d0d0;';
      if (styleKey === 'feminine') {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/2b/21/12/2b21129bed9ffcf273ac8ce44ae353b5.jpg); background-size: cover; background-position: center;`;
      } else if (styleKey === 'street') {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/c1/9c/53/c19c53031ff57ca8517b773ce4c1fa92.jpg); background-size: cover; background-position: center;`;
      } else if (styleKey === 'casual') {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/12/66/d4/1266d46a2fb3ac2724ccd9c003d0dc7e.jpg); background-size: cover; background-position: center;`;
      }
      
      card.innerHTML = `
        <div class="collection-card-img" style="${backgroundStyle} display: flex; align-items: center; justify-content: center; height: 100%;">
          <div style="text-align: center; color: white;">
            <h3 style="margin-bottom: 0.5rem;">${style.name}</h3>
            <p>자세히 보기</p>
          </div>
        </div>
      `;
      card.onclick = () => this.navigate('collection', styleKey);
      container.appendChild(card);
    });
  },

  // 카테고리 페이지 렌더링
  renderCategory() {
    const container = document.getElementById('categoryGallery');
    container.innerHTML = '';
    
    this.allStyles.forEach(styleKey => {
      const style = fashionArchive[styleKey];
      const card = document.createElement('div');
      card.className = 'gallery-card';
      card.textContent = style.name;
      
      if (styleKey === 'feminine') {
        card.style.backgroundImage = 'url(https://i.pinimg.com/736x/2b/21/12/2b21129bed9ffcf273ac8ce44ae353b5.jpg)';
        card.style.backgroundSize = 'cover';
        card.style.backgroundPosition = 'center';
      } else if (styleKey === 'romantic') {
        card.style.backgroundImage = 'url(https://i.pinimg.com/736x/02/a8/07/02a807228a63b2ada075427866b012ca.jpg)';
        card.style.backgroundSize = 'cover';
        card.style.backgroundPosition = 'center';
      } else if (styleKey === 'classic') {
        card.style.backgroundImage = 'url(https://i.pinimg.com/736x/bf/b5/b5/bfb5b528d694685a6e5fd2231ebea5f4.jpg)';
        card.style.backgroundSize = 'cover';
        card.style.backgroundPosition = 'center';
      } else if (styleKey === 'minimal') {
        card.style.backgroundImage = 'url(https://i.pinimg.com/736x/cb/15/d9/cb15d91c355571c4617ec60ef35faa74.jpg)';
        card.style.backgroundSize = 'cover';
        card.style.backgroundPosition = 'center';
      } else if (styleKey === 'street') {
        card.style.backgroundImage = 'url(https://i.pinimg.com/736x/c1/9c/53/c19c53031ff57ca8517b773ce4c1fa92.jpg)';
        card.style.backgroundSize = 'cover';
        card.style.backgroundPosition = 'center';
      } else if (styleKey === 'casual') {
        card.style.backgroundImage = 'url(https://i.pinimg.com/1200x/12/66/d4/1266d46a2fb3ac2724ccd9c003d0dc7e.jpg)';
        card.style.backgroundSize = 'cover';
        card.style.backgroundPosition = 'center';
      } else if (styleKey === 'sporty') {
        card.style.backgroundImage = 'url(https://i.pinimg.com/736x/c4/6b/c5/c46bc5c7468397262ebd415b4d251559.jpg)';
        card.style.backgroundSize = 'cover';
        card.style.backgroundPosition = 'center';
      } else if (styleKey === 'vintage') {
        card.style.backgroundImage = 'url(https://i.pinimg.com/1200x/c5/2c/2c/c52c2c11e19e676dddbd36d974481562.jpg)';
        card.style.backgroundSize = 'cover';
        card.style.backgroundPosition = 'center';
      } else if (styleKey === 'bohemian') {
        card.style.backgroundImage = 'url(https://i.pinimg.com/736x/9a/df/84/9adf840d9ff613ce6f8d75089cc8de30.jpg)';
        card.style.backgroundSize = 'cover';
        card.style.backgroundPosition = 'center';
      } else if (styleKey === 'y2k') {
        card.style.backgroundImage = 'url(https://i.pinimg.com/736x/1e/fe/72/1efe72a559b20734c5e2b3244727f8c0.jpg)';
        card.style.backgroundSize = 'cover';
        card.style.backgroundPosition = 'center';
      } else {
        card.style.background = '#d0d0d0';
      }
      
      card.style.color = 'white';
      card.style.textShadow = '0 2px 4px rgba(0, 0, 0, 0.5)';
      
      card.onclick = () => this.navigate('collection', styleKey);
      container.appendChild(card);
    });
  },

  // 컬렉션 페이지 렌더링
  renderCollection() {
    if (!this.currentStyle) return;
    
    const style = fashionArchive[this.currentStyle];
    
    // 최근 본 스타일 저장
    this.saveRecentStyle(this.currentStyle);
    
    // 최근 본 스타일 메시지 및 카드 표시
    this.renderRecentStyles();
    
    // 제목 설정
    document.getElementById('collectionTitle').textContent = style.name;
    
    // 설명 섹션을 collection-header 아래에 배치
    this.renderDescriptionSection();
    
    // 스타일 상세 정보 렌더링 (9개 카드)
    this.renderStyleDetails();
  },

  // 설명 섹션 렌더링
  renderDescriptionSection() {
    const collectionPage = document.getElementById('collection-page');
    
    // 기존 설명 섹션이 있으면 제거
    const existingDesc = collectionPage.querySelector('.description-section-top');
    if (existingDesc) {
      existingDesc.remove();
    }
    
    const style = fashionArchive[this.currentStyle];
    
    // 설명 섹션
    const descriptionSection = document.createElement('div');
    descriptionSection.className = 'description-section-top';
    descriptionSection.style.cssText = `
      background: #f5f5f5;
      padding: 2rem;
      border-radius: 8px;
      margin: 1.5rem 2rem;
      text-align: center;
      width: calc(100% - 4rem);
    `;
    
    const descTitle = document.createElement('h3');
    descTitle.textContent = '스타일 설명';
    descTitle.style.marginBottom = '1rem';
    descriptionSection.appendChild(descTitle);
    
    const descText = document.createElement('p');
    descText.textContent = style.description;
    descText.style.cssText = `
      font-size: 1.1rem;
      line-height: 1.6;
      color: #555;
    `;
    descriptionSection.appendChild(descText);
    
    // collection-header 다음에 삽입
    const collectionHeader = collectionPage.querySelector('.collection-header');
    collectionHeader.insertAdjacentElement('afterend', descriptionSection);
  },

  // 최근 본 스타일들 렌더링
  renderRecentStyles() {
    const recentStyles = this.getRecentStyles();
    const msgContainer = document.getElementById('recentCollectionMsg');
    
    if (recentStyles.length === 0) {
      msgContainer.style.display = 'none';
      return;
    }
    
    msgContainer.style.display = 'block';
    msgContainer.innerHTML = '';
    
    const titleDiv = document.createElement('div');
    titleDiv.style.marginBottom = '1rem';
    titleDiv.style.fontSize = '1rem';
    titleDiv.textContent = '최근에 본 스타일';
    msgContainer.appendChild(titleDiv);
    
    const cardsContainer = document.createElement('div');
    cardsContainer.style.display = 'flex';
    cardsContainer.style.gap = '1rem';
    cardsContainer.style.flexWrap = 'wrap';
    cardsContainer.style.justifyContent = 'center';
    
    recentStyles.forEach(styleKey => {
      const style = fashionArchive[styleKey];
      const card = document.createElement('button');
      card.style.cssText = `
        background: white;
        border: 2px solid white;
        padding: 0.75rem 1.5rem;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.95rem;
        font-weight: 500;
        transition: all 0.3s ease;
        color: #111;
      `;
      card.textContent = style.name;
      
      card.onmouseover = () => {
        card.style.background = 'rgba(255, 255, 255, 0.2)';
        card.style.transform = 'scale(1.05)';
      };
      
      card.onmouseout = () => {
        card.style.background = 'white';
        card.style.transform = 'scale(1)';
      };
      
      card.onclick = () => {
        this.currentStyle = styleKey;
        this.renderCollection();
      };
      
      cardsContainer.appendChild(card);
    });
    
    msgContainer.appendChild(cardsContainer);
  },

  // 스타일 상세 정보 렌더링
  renderStyleDetails() {
    const container = document.getElementById('collectionItems');
    container.innerHTML = '';
    
    const style = fashionArchive[this.currentStyle];
    
    // 15개의 카드를 한 그리드에 배치 (특징 5개 + 스타일 요소 5개 + 추천 항목 5개)
    const cardsGrid = document.createElement('div');
    cardsGrid.className = 'collection-grid';
    
    // 특징 섹션 카드 5개
    style.details.forEach((detail, index) => {
      const card = document.createElement('div');
      card.className = 'item-card';
      
      let backgroundStyle = "";
      if (this.currentStyle === 'feminine' && index === 0) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/10/1d/5d/101d5dbcd50d595ce6ae451f6a909496.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'feminine' && index === 1) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/aa/3b/04/aa3b0494312cf371b3df3acfffb66ceb.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'feminine' && index === 2) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/de/f3/d0/def3d07fda6395bad55e0a799d180d34.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'feminine' && index === 3) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/6a/fb/38/6afb387aef89dfac27c536b2c231c08f.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'feminine' && index === 4) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/32/a5/b7/32a5b703675679897395eace979ffad6.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'romantic' && index === 0) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/21/e3/80/21e3804d840907bcb15c487e1417d234.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'romantic' && index === 1) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/7b/eb/13/7beb138965051c010a8e77de996d9a57.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'romantic' && index === 2) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/e1/f0/a0/e1f0a04aa787d2194a20a06f3d7e544f.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'romantic' && index === 3) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/bf/b9/b9/bfb9b90c68d1eb2fe7ed1103803722f1.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'romantic' && index === 4) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/dd/e3/08/dde30820dc96a99291a09ab6b836b54f.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'classic' && index === 0) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/63/5c/27/635c2725f252072be1acebaedbb75522.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'classic' && index === 1) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/89/8c/4d/898c4d43ad1748c8c39d3289d76a9171.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'classic' && index === 2) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/25/56/3a/25563a1665b78174fe38a10eed36cda9.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'classic' && index === 3) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/74/1d/c9/741dc9b4db2a3fc663181b4bc0796381.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'classic' && index === 4) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/b5/1f/58/b51f58781912150cac95674b46adab8b.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'minimal' && index === 0) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/a6/d7/6b/a6d76b9d2212b3ca731ab1f5cde4b2b8.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'minimal' && index === 1) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/70/49/9d/70499d101cb7b20307313a73efb44207.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'minimal' && index === 2) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/a1/c0/5d/a1c05d0f6e5fcdbcb4d9aa75d6d58588.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'minimal' && index === 3) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/4b/f1/a2/4bf1a2a9505f1e6027507af4448866b4.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'minimal' && index === 4) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/93/30/4d/93304dfe1148ca7c47e7c9bbc07748aa.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'street' && index === 0) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/56/42/fa/5642fad2738bfdbd63392dbe8b8687bb.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'street' && index === 1) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/03/66/32/036632f4021f7b1a10c56d6a2c574bca.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'street' && index === 2) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/be/e7/92/bee792070e07d0d3fa133bf38084de3e.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'street' && index === 3) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/4d/e6/e9/4de6e9e879d6eba3c9cd69e95c0d5434.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'street' && index === 4) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/8d/e5/3e/8de53eb2b1c9f2a83557ebb24d63d076.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'casual' && index === 0) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/31/00/6e/31006eaed75a939400b0fa60b51a00ea.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'casual' && index === 1) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/b6/3b/5d/b63b5d0bd6a147d03862c25f8861e17f.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'casual' && index === 2) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/e6/54/e3/e654e3e5a20f32c6c815bd114dc68aae.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'casual' && index === 3) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/36/7f/0f/367f0f842782014561c974839c0a6a7b.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'casual' && index === 4) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/d1/3b/2f/d13b2f0e254b6338fbb6a5a61fb9f675.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'sporty' && index === 0) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/36/8d/65/368d65fb15732baeb57196b85065ff22.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'sporty' && index === 1) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/b1/73/9d/b1739d554a2608a5c40e9130d0f7d91d.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'sporty' && index === 2) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/62/64/1c/62641c82dd721bf9418475823545996e.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'sporty' && index === 3) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/65/03/91/650391ee24f047e6a8904dec814e095b.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'sporty' && index === 4) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/32/9a/97/329a97dedce988b4cf7554651f96fdc7.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'vintage' && index === 0) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/2c/48/36/2c4836c910dc09ad2e433419e2fa310c.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'vintage' && index === 1) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/54/88/7c/54887c1c003d4109ec10e6a19f2c78fe.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'vintage' && index === 2) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/3a/01/4c/3a014c1d98ea13b3f78d05f8ba2941e2.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'vintage' && index === 3) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/08/80/aa/0880aa447887e9435a5f002fde27a036.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'vintage' && index === 4) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/10/75/24/10752459b5a524984cba8d925a1086ca.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'bohemian' && index === 0) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/df/72/ce/df72ce13bd0f58021ae8fb1139134396.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'bohemian' && index === 1) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/4c/3f/5c/4c3f5c5025e2ed24aa46626d14fc5383.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'bohemian' && index === 2) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/2e/3e/2e/2e3e2eb6249181826e64d3e48427c00e.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'bohemian' && index === 3) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/eb/0c/26/eb0c26de8694d9aa897eeb600059e24e.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'bohemian' && index === 4) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/51/49/e6/5149e6088349d51cf58c976173ca3594.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'y2k' && index === 0) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/e2/93/f1/e293f1b376311e6346825a6121e37a7e.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'y2k' && index === 1) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/a2/c4/1c/a2c41c51dbb23c2c2639e9207587c3cb.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'y2k' && index === 2) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/30/2a/90/302a90e0e679cee75ce8ca23ad98c277.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'y2k' && index === 3) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/7a/59/1d/7a591d0ab98770d7c335b0ff9412493b.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'y2k' && index === 4) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/e5/a1/af/e5a1af016fe5f6a4001055e6b908655b.jpg); background-size: cover; background-position: center;`;
      }
      
      const cardHTML = backgroundStyle ? 
        `<div class="item-card-img" style="${backgroundStyle}"></div>` :
        `<div class="item-card-img">✓</div>`;
      
      card.innerHTML = cardHTML;
      card.onclick = () => this.openImageModal(backgroundStyle);
      cardsGrid.appendChild(card);
    });
    
    // 스타일 요소 섹션 카드 5개
    style.images.forEach((image, index) => {
      const card = document.createElement('div');
      card.className = 'item-card';
      
      let backgroundStyle = "background: #d0d0d0; color: white; font-weight: bold;";
      if (this.currentStyle === 'feminine' && index === 0) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/2b/21/12/2b21129bed9ffcf273ac8ce44ae353b5.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'feminine' && index === 1) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/59/c7/17/59c7172151d59855d660fd333d2d1a9c.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'feminine' && index === 2) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/63/2c/ef/632cef9022c614fc42d6dc3f49321a74.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'feminine' && index === 3) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/b2/c4/8f/b2c48f818741d7d6e053bbc9a0c94e94.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'feminine' && index === 4) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/b1/3d/73/b13d73c85c55eb44d0315b4dc6c86a2e.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'romantic' && index === 0) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/67/35/fa/6735fa5fb9c6e1d1b06ffbd1215a602f.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'romantic' && index === 1) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/02/a8/07/02a807228a63b2ada075427866b012ca.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'romantic' && index === 2) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/9e/31/22/9e3122180164fdc1806c23f34667d769.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'romantic' && index === 3) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/4b/f7/17/4bf7172c78bfd463caf98f8e9af6a783.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'romantic' && index === 4) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/f5/ef/73/f5ef7381d5fc783098603d22c35e835a.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'classic' && index === 0) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/d9/73/86/d97386054cec7bf68ffa36cdb20a578f.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'classic' && index === 1) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/94/69/b8/9469b87717a2649ef26f6927f26cdd3c.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'classic' && index === 2) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/a9/78/48/a97848e630c414fc50e879a45853c900.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'classic' && index === 3) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/9f/e4/c0/9fe4c0e9e280fb49e72efb7b6a939cd5.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'classic' && index === 4) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/ba/d9/7e/bad97e8add5e3eb44342e2ef211dd3b2.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'minimal' && index === 0) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/ca/4b/3b/ca4b3b6a0d9687884cc5394cd71dab3e.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'minimal' && index === 1) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/ee/9d/7c/ee9d7c93be9c68cec0c858e9d39bc7f0.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'minimal' && index === 2) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/c3/bc/fa/c3bcfac13546fab57a417d2d9f0496a0.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'minimal' && index === 3) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/05/98/c8/0598c8cead7b197c0bdc0308695e30bb.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'minimal' && index === 4) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/b2/4a/1b/b24a1b34b5cdb477ffcb89823c373a13.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'street' && index === 0) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/8e/08/55/8e08559f3d0f8fe112ab70b85cd8fb03.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'street' && index === 1) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/29/a9/79/29a979acb25293123fb83646adf96cb3.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'street' && index === 2) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/67/ac/8e/67ac8eeb201b052fc1d903fa9fe36702.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'street' && index === 3) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/66/12/53/661253f7a9b7af295b771e8c0c5ddae5.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'street' && index === 4) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/4f/3b/11/4f3b11db18baa6a663ce5ed2b5782b36.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'casual' && index === 0) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/85/d3/d4/85d3d4eee1b2f12ea9b7012573a63915.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'casual' && index === 1) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/7c/64/9c/7c649c18ca93acf8342e86371eacd9aa.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'casual' && index === 2) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/35/c4/a3/35c4a35b37f78eadb9e403c077e5a146.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'casual' && index === 3) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/47/00/09/4700091e9e9674bbca35a20e09927718.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'casual' && index === 4) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/3f/c7/33/3fc7330819eee685d122210b3a1e7368.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'sporty' && index === 0) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/08/8f/e1/088fe1e3a48446b371c4a7ec816c4472.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'sporty' && index === 1) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/3c/92/05/3c9205d3e70e526ef3e808da4b0d5920.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'sporty' && index === 2) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/57/ab/7f/57ab7f0a4b82e408693e5ec99f6e98d5.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'sporty' && index === 3) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/18/e1/00/18e10020d38c8ed9ad6a61247fa01903.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'sporty' && index === 4) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/85/f1/2b/85f12bea610ccf94715f89bdd3f59782.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'vintage' && index === 0) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/44/59/ec/4459ecdd84679a360efb950c31b0a854.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'vintage' && index === 1) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/30/0b/b8/300bb88ac768fdbe982e79722dc2a52f.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'vintage' && index === 2) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/b5/48/e6/b548e657bb7e39bc40372b76c78e12d2.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'vintage' && index === 3) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/26/3b/1a/263b1a0dfd7f595f7184e9248a7b9e09.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'vintage' && index === 4) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/75/65/80/756580fa0c17f2b257a83e9e2c4bdc9f.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'bohemian' && index === 0) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/37/1e/d3/371ed352822dbff9aec0bad420320abc.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'bohemian' && index === 1) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/7b/b3/03/7bb30357315ef9bb4e2fb11755bebfd1.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'bohemian' && index === 2) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/a3/79/5b/a3795b0b2d7be3a69617e863f290a606.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'bohemian' && index === 3) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/8f/45/ae/8f45ae76fdfd02c7aef4b696e0addd58.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'bohemian' && index === 4) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/07/e4/bf/07e4bf8992b78a2d254fd5a86f6d3b30.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'y2k' && index === 0) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/ad/8f/89/ad8f89002f18b466f9efa86fc4d0347b.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'y2k' && index === 1) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/31/e7/12/31e712fe0bca949510f316d5be806ed4.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'y2k' && index === 2) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/27/8e/05/278e05b8f1943ba4dee322cdb6ead89a.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'y2k' && index === 3) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/79/43/31/79433184bf5295dbe2e977bef4a4d79e.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'y2k' && index === 4) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/37/8f/5f/378f5fbbc0dce157c727b0e48260a158.jpg); background-size: cover; background-position: center;`;
      }
      
      card.innerHTML = `
        <div class="item-card-img" style="${backgroundStyle}"></div>
      `;
      card.onclick = () => this.openImageModal(backgroundStyle);
      cardsGrid.appendChild(card);
    });
    
    // 추천 항목 섹션 카드 5개
    style.recommendations.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'item-card';
      
      let backgroundStyle = "background: #d0d0d0; color: white; font-weight: bold;";
      if (this.currentStyle === 'feminine' && index === 0) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/4b/6a/f5/4b6af5d7801fb9e3ce5febdb5484592b.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'feminine' && index === 1) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/ca/3f/a1/ca3fa1ce1941bde9e4cca6c5ff1c5563.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'feminine' && index === 2) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/67/32/5f/67325fd8290d465a24bf9cfd860b4d2c.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'feminine' && index === 3) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/11/20/36/112036cf02e2bfc4efac4df0c73e5ae4.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'feminine' && index === 4) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/99/5f/e1/995fe118323ca8efdc33c591ff1bc291.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'romantic' && index === 0) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/8c/33/f3/8c33f334d91795a59374a4b50db2ecfe.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'romantic' && index === 1) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/c2/7a/eb/c27aebd747bf76899ace9c68e985ddad.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'romantic' && index === 2) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/6e/3f/48/6e3f480f6912046ad0b43a5390621664.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'romantic' && index === 3) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/3f/38/fc/3f38fcd182b20d32b953751bd05b8e38.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'romantic' && index === 4) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/1d/c0/6f/1dc06f76fdb874f63341125fe30e0063.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'classic' && index === 0) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/59/74/55/5974556941aa7340a16765fff8138135.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'classic' && index === 1) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/b0/95/91/b09591552d42cdd57ef9c6fc1e2f5a3b.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'classic' && index === 2) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/21/33/7a/21337a12dded0c9a69cc4070221a1fd0.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'classic' && index === 3) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/72/b1/4a/72b14aae368fe8526cf7730bfe349c34.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'classic' && index === 4) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/36/9d/d1/369dd129ef568aedfc426f437b9033a0.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'minimal' && index === 0) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/56/b9/6b/56b96b22895e913cf9b6f66eeb5cf28b.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'minimal' && index === 1) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/d0/17/01/d017016d423ba3decf59e5160830afea.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'minimal' && index === 2) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/53/ec/c9/53ecc9607c05e5bddd9b8c7b90876185.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'minimal' && index === 3) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/cb/15/d9/cb15d91c355571c4617ec60ef35faa74.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'minimal' && index === 4) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/e8/0d/4b/e80d4baf129985701324674db99655f2.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'street' && index === 0) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/b0/a4/87/b0a487dff9a3c9c24ee1dcf4f87aafc6.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'street' && index === 1) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/e1/05/e2/e105e269050908637e576da267c2a3b6.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'street' && index === 2) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/bc/ff/e6/bcffe611e99ed63044f50b0c9a0d5cd0.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'street' && index === 3) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/05/d3/52/05d3529cf29241de8fec403b7103b178.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'street' && index === 4) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/21/0a/48/210a48ffbddf6b8fd39f78a30db07a10.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'casual' && index === 0) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/1c/d8/c2/1cd8c2d389a3cb89c955473c64eea325.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'casual' && index === 1) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/a0/8f/0e/a08f0e78f117b02f93a28360a3add9c6.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'casual' && index === 2) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/8b/91/25/8b912507e3c9e81dcaae44c1706cd790.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'casual' && index === 3) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/91/df/1a/91df1a7a00f6e454c3a34fd238121b22.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'casual' && index === 4) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/52/86/83/528683cfa9b01955ff7dba69871aa272.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'sporty' && index === 0) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/37/59/a0/3759a070e564245df6eb99c2551cb8ee.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'sporty' && index === 1) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/3f/97/01/3f97013a6096c755dc9116e6250c9af1.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'sporty' && index === 2) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/bd/8d/78/bd8d78deddaaf06f26a68ecf19d6ddb3.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'sporty' && index === 3) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/18/c1/85/18c18588da3a4dc53baa4a0177a93ec4.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'sporty' && index === 4) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/ea/a1/0a/eaa10ac9632ed3be6bf54e829c9b118f.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'vintage' && index === 0) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/c4/ee/19/c4ee190ded82f97d2105d8ca0d44d631.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'vintage' && index === 1) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/78/23/26/7823266bb3b9d5ab204f573e16faed4a.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'vintage' && index === 2) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/75/7d/04/757d04ce744a51f3c068d5381e0fc9c0.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'vintage' && index === 3) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/b5/dc/ac/b5dcacd6723746caf61254dc6214df02.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'vintage' && index === 4) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/83/b8/90/83b890cc6e937f615955da66ae97aa30.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'bohemian' && index === 0) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/63/29/4a/63294a6b3f8d7ec4c61e385bca18b088.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'bohemian' && index === 1) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/00/bf/79/00bf795e726c319349a229658a863299.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'bohemian' && index === 2) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/2f/b3/c0/2fb3c014d29540e39f019e8a384900b3.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'bohemian' && index === 3) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/4b/66/35/4b66351b5538453cfc72471888ceb5a8.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'bohemian' && index === 4) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/97/21/9b/97219b9d2c50f7a1522e31245624b9d6.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'y2k' && index === 0) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/7e/37/01/7e37014925097930909046602d9de52c.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'y2k' && index === 1) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/fd/a9/9e/fda99e3626ceef153ef53d92bb4f4ddc.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'y2k' && index === 2) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/1200x/42/f8/78/42f87828621308ca1f856d84a258b55a.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'y2k' && index === 3) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/c6/08/74/c60874d95fff24924505a71c57897e0c.jpg); background-size: cover; background-position: center;`;
      } else if (this.currentStyle === 'y2k' && index === 4) {
        backgroundStyle = `background-image: url(https://i.pinimg.com/736x/03/0f/22/030f2215f887cd4e3fee16ba24b1e7f3.jpg); background-size: cover; background-position: center;`;
      }
      
      card.innerHTML = `
        <div class="item-card-img" style="${backgroundStyle}"></div>
      `;
      card.onclick = () => this.openImageModal(backgroundStyle);
      cardsGrid.appendChild(card);
    });
    
    // 추가 카드 1개
    const extraCard = document.createElement('div');
    extraCard.className = 'item-card';
    
    let extraBackgroundStyle = "background: #d0d0d0;";
    if (this.currentStyle === 'feminine') {
      extraBackgroundStyle = `background-image: url(https://i.pinimg.com/1200x/db/a7/d3/dba7d3d328f8bd411626cb811594561a.jpg); background-size: cover; background-position: center;`;
    } else if (this.currentStyle === 'romantic') {
      extraBackgroundStyle = `background-image: url(https://i.pinimg.com/736x/2d/1d/a1/2d1da1a45a40ce618080877796e489f4.jpg); background-size: cover; background-position: center;`;
    } else if (this.currentStyle === 'classic') {
      extraBackgroundStyle = `background-image: url(https://i.pinimg.com/736x/bf/b5/b5/bfb5b528d694685a6e5fd2231ebea5f4.jpg); background-size: cover; background-position: center;`;
    } else if (this.currentStyle === 'minimal') {
      extraBackgroundStyle = `background-image: url(https://i.pinimg.com/736x/67/d3/66/67d36693d349abe1b9b83a421a007ccb.jpg); background-size: cover; background-position: center;`;
    } else if (this.currentStyle === 'street') {
      extraBackgroundStyle = `background-image: url(https://i.pinimg.com/736x/c1/9c/53/c19c53031ff57ca8517b773ce4c1fa92.jpg); background-size: cover; background-position: center;`;
    } else if (this.currentStyle === 'casual') {
      extraBackgroundStyle = `background-image: url(https://i.pinimg.com/1200x/12/66/d4/1266d46a2fb3ac2724ccd9c003d0dc7e.jpg); background-size: cover; background-position: center;`;
    } else if (this.currentStyle === 'sporty') {
      extraBackgroundStyle = `background-image: url(https://i.pinimg.com/736x/c4/6b/c5/c46bc5c7468397262ebd415b4d251559.jpg); background-size: cover; background-position: center;`;
    } else if (this.currentStyle === 'vintage') {
      extraBackgroundStyle = `background-image: url(https://i.pinimg.com/1200x/c5/2c/2c/c52c2c11e19e676dddbd36d974481562.jpg); background-size: cover; background-position: center;`;
    } else if (this.currentStyle === 'bohemian') {
      extraBackgroundStyle = `background-image: url(https://i.pinimg.com/736x/9a/df/84/9adf840d9ff613ce6f8d75089cc8de30.jpg); background-size: cover; background-position: center;`;
    } else if (this.currentStyle === 'y2k') {
      extraBackgroundStyle = `background-image: url(https://i.pinimg.com/736x/1e/fe/72/1efe72a559b20734c5e2b3244727f8c0.jpg); background-size: cover; background-position: center;`;
    }
    
    extraCard.innerHTML = `
      <div class="item-card-img" style="${extraBackgroundStyle}"></div>
    `;
    extraCard.onclick = () => this.openImageModal(extraBackgroundStyle);
    cardsGrid.appendChild(extraCard);
    
    container.appendChild(cardsGrid);
  },


  // 메뉴 드롭다운 스타일 설정
  setupMenuStyles() {
    const menuBrands = document.querySelector('.menu-brands');
    menuBrands.innerHTML = '';
    
    // 각 스타일을 메뉴에 추가
    this.allStyles.forEach(styleKey => {
      const style = fashionArchive[styleKey];
      const item = document.createElement('div');
      item.className = 'menu-brand-item';
      item.textContent = style.name;
      item.style.cssText = `
        padding: 0.75rem 1rem;
        cursor: pointer;
        border-bottom: 1px solid #e0e0e0;
        transition: background 0.2s;
      `;
      
      item.onmouseover = () => {
        item.style.background = '#f5f5f5';
      };
      
      item.onmouseout = () => {
        item.style.background = 'transparent';
      };
      
      item.onclick = () => {
        this.navigate('collection', styleKey);
      };
      menuBrands.appendChild(item);
    });
  },

  // 메뉴 토글
  toggleMenu() {
    const menu = document.getElementById('menuDropdown');
    menu.classList.toggle('show');
  },

  // 검색 기능
  search() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (!searchTerm) return;
    
    // 스타일 검색
    const style = this.allStyles.find(s => 
      fashionArchive[s].name.toLowerCase().includes(searchTerm)
    );
    
    if (style) {
      this.navigate('collection', style);
      searchInput.value = '';
    } else {
      alert('검색 결과가 없습니다. 다시 시도해주세요.');
    }
  },

  // 검색 리스너 설정
  setupSearchListener() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.search();
      }
    });
  },

  // 이미지 모달 열기
  openImageModal(backgroundStyle) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    // background-image URL 추출
    const urlMatch = backgroundStyle.match(/url\(['"]?([^'"]+)['"]?\)/);
    if (urlMatch && urlMatch[1]) {
      modalImage.src = urlMatch[1];
      modal.classList.remove('hidden');
      
      // 모달 배경 클릭 시 닫기
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          this.closeImageModal();
        }
      });
      
      // ESC 키 누르면 닫기
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.closeImageModal();
        }
      });
    }
  },

  // 이미지 모달 닫기
  closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.add('hidden');
  }
};

// 페이지 로드 시 앱 초기화
document.addEventListener('DOMContentLoaded', () => {
  app.init();
});

// 문서 외부 클릭 시 메뉴 닫기
document.addEventListener('click', (e) => {
  const menu = document.getElementById('menuDropdown');
  const toggle = document.querySelector('.menu-toggle');
  
  if (menu && toggle && !menu.contains(e.target) && !toggle.contains(e.target)) {
    menu.classList.remove('show');
  }
});
