@echo off
mode con cols=37 lines=15

:face
title nDBsC - Made By PMH Studio
cls
echo ������������������������������������
echo ����node.js Discord Bots Client�� ��
echo �������� ����Made By PMH Studio.����
echo ������������������������������������
echo �� Copyright (c) 2018. PMH Studio ��
echo �� ������������������������������ ��
echo �� *requires������������������ �� ��
echo �� -node.js 8.11 or Newer version ��
echo �� -Discord.js (discord.js.org) ����
echo �� -index.js (Your Bot's js)��������
echo �� -Your Command...�� ��������������
echo �� ������������������������������ ��
echo �� Press Enter to Start...����������
echo ������������������������������������
set a=start
set /p first=: >nul
if /i %first%==start (goto roby)
if /i %first%==EasterEgg (echo msgbox"LOL! You Find EasterEgg!">C:\temp.vbs &;C:\temp.vbs &;del C:\temp.vbs)
echo msgbox"Command Error, Shutdown nDBsC">C:\temp.vbs &;C:\temp.vbs &;del C:\temp.vbs

:roby
title nDBsC - Roby
cls
echo ������������������������������������������
echo �� ��Bot Server����������������������������
echo ��             Made By PMH Studio / PMH  ��
echo ��---------------------------------------��
echo �� Copyright (c) 2018. PMH Studio / PMH. ��
echo ���������������������������������������� ��
echo �� - Node.js��ݡ����������������������� ��
echo �� - Discord.js��ݡ�����������������������
echo ���������������������������������������� ��
echo �� - Ctrl+C�� ���� ��������Ʈ ���ɡ� ������
echo �� - �� â�� ���� ���� ���ᡡ��������������
echo ��---------------------------------------��
echo �� Discord.js, Node.js �ε���....��  ������
goto start

:start
:restart
title ��Bot - [Running...]
"%a%:\node.js\node.exe" index.js
title ��Bot - [Idle]
echo ������������������������������������������
echo �� ��Bot Server����������������������������
echo ��             Made By PMH Studio / PMH  ��
echo ��---------------------------------------��
echo �� Copyright (c) 2018. PMH Studio / PMH. ��
echo ���������������������������������������� ��
echo �� - Node.js��ݡ����������������������� ��
echo �� - Discord.js��ݡ�����������������������
echo ���������������������������������������� ��
echo �� - Ctrl+C�� ���� ��������Ʈ ���ɡ� ������
echo �� - �� â�� ���� ���� ���ᡡ��������������
echo ��---------------------------------------��
echo �� �ƹ�Ű�� ���� ���� ������Ʈ�մϴ�...����
pause >nul
goto restart
