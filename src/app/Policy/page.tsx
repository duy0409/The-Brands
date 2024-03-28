'use client'
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import FtMobile from "../components/footerMobile";
import HtMobile from "../components/ButtonMenu";
import styles from "../css/Policy.module.css";
import Image from "next/image";

const Policy = () => {
    return (
        <div className={styles.policyContainer}>
            <div><Header /><HtMobile /></div>
            <div className={styles.slider}>
                <a >
                    <Image
                        src="/FashionNews/bar.svg"
                        alt="bar"
                        width={1728}
                        height={200}
                        layout="responsive"
                        objectFit="cover"
                    />
                </a>
            </div>
            <div className={styles.policyContent1}><br />
                <div className={styles.policyContent}>
                    <h1>WEBSITE AYDENBRANDS</h1>
                    <p>Website liên kết giới thiệu thương hiệu thời trang thuộc sở hữu của Công Ty TNHH Ayden Techco. Website được thiết lập để phục vụ, hỗ trợ hoạt động tìm kiếm, tham khảo các trang phục đến từ các thương hiệu thời trang. Thông qua Website, AydenBrands liên kết trực tiếp tới người tiêu dùng có nhu cầu mua sản phẩm.</p>
                    <p>Website được xây dựng nhằm hỗ trợ tối đa cho khách hàng muốn tìm hiểu thông tin trực tuyến về những sản phẩm thời trang và thương hiệu đến người tiêu dùng trực tiếp.</p>
                    <h2>Quy định chung</h2>
                    <p>Tên miền và địa chỉ truy cập website: <a id={styles.policyLink} href="https://adyenbrands.com/">https://adyenbrands.com/</a></p>
                    <p>Chức năng của Website AydenBrand: Là nơi giới thiệu sản phẩm, trưng bày sản phẩm, cung cấp thông tin về sản phẩm từ các thương hiệu thời trang, đồng thời người tiêu dùng cũng có thể mua bằng các liên kết đến trang thương mại điện tử thông qua Website.</p>
                    <p>Đối tượng xem Website aaajeans.com: Là những bạn thế hệ trẻ hoặc những người có nhu cầu tìm hiểu thông tin về các thương hiệu thời trang.</p>
                    <p>Nội dung bản chính sách và quy định chung này tuân thủ theo các quy định hiện hành của Việt Nam.</p>
                    <h2>Chính Sách Bảo Mật</h2>
                    <p>Website AydenBrands cam kết sẽ bảo mật những thông tin mang tính riêng tư của người dùng. Xin vui lòng đọc bản “Chính sách bảo mật thông tin” dưới đây để hiểu hơn những cam kết mà chúng tôi thực hiện, nhằm tôn trọng và bảo vệ quyền lợi của người truy cập.</p>
                    <p>Mục Đích và Phạm Vi Thu thập thông tin cá nhân:
                        Các thông tin thu thập thông qua Website sẽ giúp chúng tôi:
                        Hỗ trợ Quý khách khi mua sản phẩm
                        Giải đáp thắc mắc của người dùng
                        Cung cấp cho người dùng thông tin mới nhất trên Website của chúng tôi
                        Xem xét và nâng cấp nội dung và giao diện của Website
                        Thực hiện các hoạt động quảng bá liên quan đến dịch vụ của website aydenbrands.com.
                        Để truy cập và thực hiện việc các hành vi tương tác tại Website, quý khách có thể sẽ được yêu cầu đăng ký với chúng tôi thông tin cá nhân (Email, Số ĐT liên lạc…). Mọi thông tin khai báo phải đảm bảo tính chính xác và hợp pháp. AydenBrands không chịu trách nhiệm liên quan đến pháp luật của thông tin do người dùng khai báo.
                        Phạm vi sử dụng thông tin cá nhân và thời gian lưu trữ:
                        Website thu thập và sử dụng thông tin cá nhân của người dùng với mục đích phù hợp và hoàn toàn tuân thủ nội dung của “Chính sách bảo mật thông tin ” này.
                        Khi cần thiết, chúng tôi có thể sử dụng những thông tin này để liên hệ trực tiếp với người dùng dưới các hình thức như: gởi thư ngỏ, thư cảm ơn, thông tin về kỹ thuật và bảo mật, người dùng có thể nhận được thư định kỳ cung cấp thông tin thương hiệu mới, thông tin về các sự kiện sắp tới hoặc thông tin tuyển dụng nếu người dùng đăng kí nhận email thông báo.
                        Do mục đích của việc thu thập thông tin của người dùng nhằm mục đích chính để nâng cao chất lượng website, chúng tôi không giới hạn thời gian lưu trữ thông tin của người dùng và chúng tôi sẽ lưu trữ thông tin cho tới khi nào Website còn tồn tại.
                        Chia sẻ và thay đổi thông tin cá nhân:
                        Ngoại trừ các trường hợp về Sử dụng thông tin cá nhân như đã nêu trong chính sách này, chúng tôi cam kết sẽ không tiết lộ thông tin cá nhân của người dùng cho các bên thứ ba khác.
                        Trong một số trường hợp, chúng tôi có thể thuê một đơn vị độc lập để tiến hành các dự án nghiên cứu thị trường và khi đó thông tin của người dùng sẽ được cung cấp cho đơn vị này để tiến hành dự án. Bên thứ ba này sẽ bị ràng buộc bởi một thỏa thuận về bảo mật mà theo đó họ chỉ được phép sử dụng những thông tin được cung cấp cho mục đích này.
                        Chúng tôi có thể tiết lộ hoặc cung cấp thông tin cá nhân của người dùng trong các trường hợp thật sự cần thiết như sau:
                        (a) khi có yêu cầu của các cơ quan pháp luật;
                        (b) trong trường hợp mà chúng tôi tin rằng điều đó sẽ giúp chúng tôi bảo vệ quyền lợi chính đáng của mình trước pháp luật;
                        (c) tình huống khẩn cấp và cần thiết để bảo vệ quyền an toàn cá nhân của các thành viên khác đăng ký trên website.

                        Trong trường hợp quý khách muốn thay đổi thông tin cá nhân, xin hãy đăng nhập vào Website để chính sửa thông tin theo ý muốn.
                        Cam Kết Bảo mật thông tin cá nhân:
                        Khi Quý khách gửi thông tin cho chúng tôi, Quý khách đã đồng ý với các điều khoản mà chúng tôi đã nêu ở trên, AydenBrands cam kết bảo mật thông tin cá nhân của quý khách bằng mọi cách thức có thể. Chúng tôi cam kết rằng chúng tôi sẽ nỗ lực tối đa trong khả năng có thể để bảo vệ thông tin của quý khách hàng.
                        Tuy nhiên do hạn chế về mặt kỹ thuật, có thể có những tình huống bất khả kháng xảy ra như hacker, lỗi bảo mật đường truyền internet và những tình huống bất khả kháng này có thể ảnh hưởng tới việc bảo mật thông tin của Quý khách. Do vậy, chúng tôi không thể đưa ra một cam kết chắc chắn rằng thông tin quý khách cung cấp cho chúng tôi sẽ được bảo mật một cách tuyệt đối an toàn và chúng tôi không thể chịu trách nhiệm trong trường hợp có sự truy cập trái phép thông tin cá nhân của quý khách trong các tính huống bất khả kháng hoặc trong các trường hợp quý khách tự ý chia sẻ thông tin với người khác…. Nếu quý khách không đồng ý với các điều khoản như đã mô tả ở trên, Chúng tôi khuyên quý khách không nên gửi thông tin đến cho chúng tôi.
                        Vì vậy, AydenBrands cũng khuyến cáo quý khách nên bảo mật các thông tin liên quan đến mật khẩu truy xuất của quý khách và không nên chia sẻ với bất kỳ người nào khác.
                        Nếu sử dụng máy tính chung nhiều người, quý khách nên đăng xuất, hoặc thoát hết tất cả cửa sổ Website đang mở.
                        Quy định về “Thư rác”:
                        AydenBrands thực sự quan ngại đến vấn nạn thư rác, các Email giả mạo danh tính chúng tôi gởi đi. Do đó, AydenBrands khẳng định chỉ gởi Email đến quý khách khi và chỉ khi quý khách có đăng ký hoặc sử dụng dịch vụ từ hệ thống của chúng tôi hoặc tham gia danh sách nhận tin của chúng tôi.
                        AydenBrands cam kết không bán, thuê lại hoặc cho thuê email của quý khách từ bên thứ ba. Nếu quý khách vô tình nhận được Email không theo yêu cầu từ hệ thống chúng tôi do một nguyên nhân ngoài ý muốn, xin vui lòng nhấn vào link từ chối nhận Email kèm theo, hoặc thông báo trực tiếp tới số hotline của AydenBrands.
                        Thay đổi về chính sách:
                        Chúng tôi hoàn toàn có thể thay đổi nội dung trong trang này mà không cần phải thông báo trước, để phù hợp với các nhu cầu của AydenBrands cũng như nhu cầu và sự phản hồi từ Quý khách nếu có. Khi cập nhật nội dung chính sách này, chúng tôi sẽ chỉnh sửa lại thời gian cập nhật ở phần đầu chính sách này.
                        Nội dung “Chính sách bảo mật thông tin” này chỉ áp dụng tại Website, không bao gồm hoặc liên quan đến các bên thứ ba đặt quảng cáo hay có links tại Website. Chúng tôi khuyến khích Quý khách đọc kỹ chính sách An toàn và Bảo mật của các trang web của bên thứ ba trước khi cung cấp thông tin cá nhân cho các trang web đó. Chúng tôi không chịu trách nhiệm dưới bất kỳ hình thức nào về nội dung và tính pháp lý của trang web thuộc bên thứ ba.
                        Vì vậy, Quý khách đã đồng ý rằng, khi Quý khách sử dụng website của chúng tôi sau khi chỉnh sửa nghĩa là Quý khách đã thừa nhận, đồng ý tuân thủ cũng như tin tưởng vào sự chỉnh sửa này. Do đó, chúng tôi đề nghị Quý khách nên xem trước nội dung trang này trước khi truy cập các nội dung khác trên website cũng như Quý khách nên đọc và tham khảo kỹ nội dung Chính sách bảo mật của từng website mà Quý khách đang truy cập.
                    </p>

                    <p>Thông tin liên hệ: Chúng tôi luôn hoan nghênh các ý kiến đóng góp, liên hệ và phản hồi thông tin từ Quý khách về “Chính sách bảo mật” này. Nếu Quý khách có những thắc mắc liên quan xin vui lòng liên hệ theo địa chỉ Email: nguyentanchieu2002@gmail.com hoặc liên hệ trực tiếp với chúng tôi tại địa chỉ sau:</p>
                    <p>Công Ty TNHH Ayden Techco</p>
                    <p>Số 14, KDC Thiên Long, Phường 5, TP. Bạc Liêu</p>
                    <p>Hotline: 0782189898</p>
                </div>
            </div><br /><br />
            <div><Footer /><FtMobile /></div>
        </div>
    );
}

export default Policy;
