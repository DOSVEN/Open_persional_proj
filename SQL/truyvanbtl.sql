-- 1. In ra danh sách học sinh ( mã HS, tên HS) các lớp:
-- 	a. Lớp hoa sữa
	SELECT TenLop,MaHS,TenHS  
	FROM hocsinh
	where TenLop = 'hoa sữa';
-- b. Lớp hoa mai
	SELECT TenLop,MaHS,TenHS  
	FROM hocsinh
	where TenLop = 'hoa hồng';
-- c. Lớp hoa hồng
	SELECT TenLop,MaHS,TenHS  
	FROM hocsinh
	where TenLop = 'hoa mai';

-- 2. In ra giáo viên phụ trách các lớp theo từng buổi:

	select TenGV,TenLop,thoikhoabieu
    from lophoc
    where thoikhoabieu ='sáng';

-- 3. Danh sách học sinh thuộc khu vực:
	select tenHS, diachi
	from hocsinh
	where diachi = 'hanoi';

-- 4. Danh sách phụ huynh của học sinh thuộc các lớp:

	select TenPH, TenHS, TenLop
    from solienlac
    where TenLop = 'hoa sữa';

-- 5. Danh sách các lớp học buổi sáng/chiều và số lượng học sinh:
	select TenLop, soluonghs
	from lophoc
	where thoikhoabieu ='sáng';

-- 6. In ra danh sách thông tin các cán bộ là giáo viên:
	select TenCB, tuoi, diachi
	from canbo, giaovien
	where canbo.MaCB= giaovien.MaCB;

-- 7. In ra tên, tuổi của cán bộ có độ tuổi trên 35:

SELECT TenCB, years from 
(SELECT TenCB, ROUND(DATEDIFF(CURDATE(), ngaysinh) / 365, 0) AS years
    FROM canbo) as A
    where years > 35;

-- 8.
