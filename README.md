# beb-07-second-06

팀명 : EWE

팀장 - 윤수빈 프론트엔드 개발, 디자인<br>
팀원 - 강두훈 프론트엔드 개발, 디자인<br>
팀원 - 설동헌 백엔드, 스마트 컨트랙트 개발<br>
팀원 - 김현태 백엔드, 스마트 컨트랙트 개발<br>

프로젝트 소개<br>
맛집 리뷰를 작성하는 인센티브 커뮤니티입니다. 리뷰의 품질을 높이기 위하여, 작성되는 리뷰마다 토큰이 지급되고 작성된 리뷰에 토큰을 “좋아요” 기능처럼 사용 가능합니다. 
또한 모은 토큰을 가지고 쿠폰을 구매하여 이용 가능합니다.

배경
맛집 추천은 인터넷에 치면 바로바로 나옵니다. 그리고 보통 해당 맛집들에 대해서 별점과 리뷰들을 보며 식사나 디저트를 먹을 곳을 찾게 됩니다. 하지만 아이러니하게도 이 데이터를 통해 합리적인 생각을 갖고 맛집이라고 판단한 곳을 방문해보지만, 실패하는 경우가 생깁니다. 다음과 같은 문제때문에 이런 경우가 발생합니다.

뒷광고 리뷰 문제
이는 리뷰가 해당 식당에 광고를 받아 작성되었을 가능성이 있습니다. 그래서 본질은 왜곡하고 좋은 점들만, 혹은 좋은 점들까지 꾸며서 쓰는 경우도 생깁니다. 광고가 꼭 나쁜것은 아니지만, 음식을 빛 좋은 개살구로 만드는 것은 해당 광고 리뷰가 광고가 아닌 것처럼 포장하는 것은 사람들이 맛집을 구분하기 어렵게 만듭니다. 

리뷰 별점, 좋아요 스캠 문제
별점 또한 가게 평판 관리를 하는 영세 기업에 맡깁니다. 해당 기업은 가계정을 여러 개 만들어 두어 해당 가게의 별점을 올리게 됩니다. 여기서 데이터에 대한 데이터로 리뷰에 대한 좋아요를 누르게 하는 서비스도 존재합니다. 잘 작성된 리뷰는 좋아요가 많고, 리뷰가 광고성이 짙고 실제와 거리가 멀다면 좋아요가 없을 것입니다. 하지만 이런 방지책 또한 별점의 사례와 같이 평판 관리를 맡긴다면 식당에 유리한 리뷰들만 좋아요가 많아질 수 있습니다.

블랙컨슈머 문제
블랙컨슈머의 문제도 있습니다. 가끔 그냥 싫어서 가게의 별점을 내려버리는 사람도 생깁니다. 결국 선량한 가게가 피해를 보게 되는 경우가 생깁니다.
이 문제들을 해결하기 위해 이번 프로젝트를 기확하였습니다.

# 기능

사용자의 관점에서 제공되는 기능을 정리합니다.

## 개요

| 기능 | 설명 |
| --- | --- |
| 리뷰 작성 및 토큰 지급 | 맛집에 대한 리뷰를 작성하면 토큰을 지급 받습니다. |
| 리뷰 팁 기능 | 도움이 된 리뷰에 토큰을 팁처럼 보내는 기능입니다. 해당 리뷰를 작성한 글쓴이는 부가적으로 토큰을 벌 수 있습니다. |
| NFT 쿠폰 구매 기능 | 모은 토큰으로 매장에서 사용할 수 있는 NFT를 구매할 수 있습니다. |

# 기능 별 상세설명

- 리뷰 작성 및 토큰 지급

리뷰를 작성할 때마다 정보를 제공해준 대가로 토큰을 지급 받습니다.

- 리뷰 팁 기능

도움이 된 리뷰에 토큰을 팁처럼 보내는 기능입니다. 해당 토큰은 리뷰를 작성한 글쓴이이게 전해집니다.  또한 특정 리뷰가 다른 유저들로부터 총 얼마의 팁을 받았는지 확인할 수 있습니다. 

- NFT 쿠폰 구매 기능

이 커뮤니티에서 토큰의 최종 소비처로 작용하는 기능입니다. 고품질의 리뷰를 작성하여 번 토큰으로 매장에서 사용 가능한 NFT 쿠폰을 구매할 수 있습니다.
